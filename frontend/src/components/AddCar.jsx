import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function AddCar() {

  const navigate = useNavigate();

    const [CarData, setCarData] = useState({
    baslik: '',
    marka: '',
    model: '',
    vites: '',
    renk: '',
    fiyat: '',
    });

  const handleChange = (e) =>{
    setCarData({
      ...CarData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const res = axios.post("http://127.0.0.1:8000/api/car/insert", CarData).then((response) =>{
      console.log(response.data.message);
      navigate("/");
    })
  }
  
  


  return (
    <div style={{minHeight:"88vh"}}>
      <div className="container">
      <h1>Yeni İlan Oluştur</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-4">
              <label className='form-label'>İlan Başlığı</label>
              <input type="text" className="form-control" onChange={handleChange} name='baslik' />
            </div>

            <div className="col-4">
            <label className='form-label'>Marka</label>
              <input type="text" className="form-control" onChange={handleChange} name='marka' />
            </div>

            <div className="col-4">
              <label className='form-label'>Model</label>
              <input type="text" className='form-control' onChange={handleChange} name='model' />
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
              <input type="text" className="form-control" onChange={handleChange} name='renk' />
            </div>

            <div className="col-4">
              <label className='form-label'>Yıl</label>
              <input type="number" className="form-control" onChange={handleChange} name='yil' />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <button className='btn btn-success' type='submit'>Kaydet</button>
              <NavLink to={'/'} className='btn btn-danger mx-2'>Vazgeç</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCar