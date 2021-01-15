import React, {Component} from 'react';
import './App.css';

class App extends Component {
      constructor() {
        super();
        this.state = {
            nominal: 0,
            bunga: 0,
            periode: 0,
            hasildata: 0,
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
        Operasi = (event) => {
            event.preventDefault();
            let data = {
            nominal: this.state.nominal,
            bunga: this.state.bunga,
            periode: this.state.periode,
            }
      
            let data_periode= data.nominal / data.periode
            let data_bunga = (data.nominal * data.bunga / 100) / data.periode
            let hasil = data_bunga + data_periode

            this.setState({
                hasildata: hasil
            })
        }
        
    render(){
        return(
            <div className="container col-sm-6">
              <div class="card mt-4 mr-5 ml-5">
                <div class="card-header bg-primary text-black">Cicilan Bank</div>
                 <div class="card-body">
                    <form onSubmit={this.Operasi}>  
                    <div className="form-group">
                        <label>Nominal</label>
                        <input type="number" name="nominal" className="form-control" value={this.state.nominal} onChange={this.bind} required/>
                    </div> 

                    <div className="form-group">
                        <label>Bunga</label>
                        <input type="number" name="bunga" className="form-control" value={this.state.bunga} onChange={this.bind} required />
                    </div>

                    <div className="form-group">
                        <label>Periode</label>
                        <select  name="periode" className="form-control" value={this.state.periode} onChange={this.bind}>
                                <option value="0" >Pilih Bulan</option>
                                <option value="6" >6 Bulan</option>
                                <option value="12"> 12 Bulan</option>
                        </select>
                    </div> 

                        <button class="btn btn-success" type="submit">Hitung</button>

                    </form>
                    <hr></hr>
                    <div className="alert alert-info">
                        <strong><center>Rp. {this.state.hasildata}</center></strong> 
                    </div>
                    </div>
                </div>
                </div>
        );
    }
    }
export default App;
