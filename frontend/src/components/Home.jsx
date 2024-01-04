import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners';
import Loader from './layouts/Loader';


function Home() {
  const param = useParams();
  const [cars,setCars] = useState([]);
  const [isLoading , setIsLoading] = useState(true);

  useEffect( () => {
      axios.get('http://127.0.0.1:8000/api/cars').then((response) => {
        setCars(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      })
    }, []);

    const deleteCar = (id) =>{
      axios.delete(`http://127.0.0.1:8000/api/car/delete/${id}`).then((response) => {
        console.log(response.data.message);
        window.location.reload();
      });
    }

    const nameReplace =  (name) =>{
      const newName = name.split(" ").map((word) => {
        return word.substring(0,1)+"****";
      });
      return newName.join(" ");
    }
    if(isLoading){
      return <Loader/>
    }
  return (
    <div className='main container'>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Görsel</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Şanzıman Türü</th>
            <th>İlan Tarihi</th>
            <th>Yükleyen</th>
            <th>İşlemler</th>
          </tr>
        </thead>

        <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td><img src={car.image ? car.image : 'https://robuso.com.tr/images/yok.png'} height={60} alt={car.baslik} /></td>
            <td>{car.marka}</td>
            <td>{car.model}</td>
            <td>{car.vites}</td>
            <td>{car.created_at ? car.created_at.substring(0,10) : ''}</td>
            <td>{car.kullanici ? nameReplace(car.kullanici) : 'GİZLİ'}</td>
            <td>
              <Link to={`/car/edit/${car.id}`} className='btn btn-sm btn-success mx-1'>Düzenle</Link>
              <button className='btn btn-sm btn-danger' onClick={() => deleteCar(car.id)}>Sil</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home