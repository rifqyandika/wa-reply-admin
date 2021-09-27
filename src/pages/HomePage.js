import axios from "axios";
import {
  Container,
  Table
} from "react-bootstrap";
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [dataHadir, setDataHadir] = useState([])

  useEffect(() => {
    axios.get('https://wa-report.herokuapp.com/dataabsen')
      .then((response) => {
        console.log(response.data);
        setDataHadir(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <Container>
        <div className="tableku">
          <div className="inputku ml-auto"> 
          </div>
          <Table striped bordered hover variant="dark" className="shadow">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Tanggal</th>
                <th>Masuk</th>
                <th>Keluar</th>
              </tr>
            </thead>
            <tbody>
          
              {dataHadir.map(item=> {
                return (
                  <tr key={item._id}>
                  <td>{item.nama}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.masuk}</td>
                  <td>{item.keluar}</td>
                  </tr>
                )
              })}
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
