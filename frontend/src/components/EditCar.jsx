import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function AddCar() {

  const {id} = useParams();
  const navigate = useNavigate();

    const [CarData, setCarData] = useState({
    baslik: '',
    marka: '',
    model: '',
    vites: '',
    renk: '',
    yil:'',
    });

  const handleChange = (e) =>{
    setCarData({
      ...CarData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/car/insert", CarData).then((response) =>{
      console.log(response.data.message);
    })
  }

  useEffect(() =>{
    axios.get(`http://127.0.0.1:8000/api/car/edit/${id}`).then((response) =>{
      setCarData(response.data.data);
      console.log(response);
    });
  },[id]);

  const  carUpdate = async (e) =>{
    e.preventDefault();
    const newData ={
      baslik: CarData.baslik,
      marka: CarData.marka,
      model: CarData.model,
      vites: CarData.vites,
      renk: CarData.renk,
      yil:CarData.yil,
    }

    const res = await axios.put(`http://127.0.0.1:8000/api/car/update/${id}`, newData).then((response) =>{
      console.log(response.data.message);
      navigate("/");
    })
  }


  
  


  return (
    <div style={{minHeight:"88vh"}}>
      <div className="container">
      <h1>İlan Düzenle</h1>
        <form action="" onSubmit={carUpdate}>
          <div className="row mt-3">
            <div className="col-4">
              <label className='form-label'>İlan Başlığı</label>
              <input type="text" className="form-control" value={CarData.baslik} onChange={handleChange} name='baslik' />
            </div>

            <div className="col-4">
            <label className='form-label'>Marka</label>
              <input type="text" className="form-control" value={CarData.marka} onChange={handleChange} name='marka' />
            </div>

            <div className="col-4">
              <label className='form-label'>Model</label>
              <input type="text" className='form-control' value={CarData.model} onChange={handleChange} name='model' />
            </div>
          </div>

          <div className="row">
            
          <div className="col-4">
            <label className='form-label'>Vites</label>
              <select 
              name="vites" 
              className="form-select"
              value={CarData.vites}
              onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                <option value="Manuel">Manuel</option>
                <option value="Yarı Otomatik">Yarı Otomatik</option>
                <option value="Otomatik">Otomatik</option>
              </select>
            </div>

            <div className="col-4">
              <label className='form-label'>Renk</label>
              <input type="text" className="form-control" value={CarData.renk} onChange={handleChange} name='renk' />
            </div>

            <div className="col-4">
              <label className='form-label'>Yıl</label>
              <input type="number" className="form-control" value={CarData.yil} onChange={handleChange} name='yil' />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <NavLink to="/" className='btn btn-danger m-2'>İlanlara Dön</NavLink>
              <button className='btn btn-success' type='submit'>Kaydet</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCar