import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import adminstyles from '../AdminProfile.css';
import '../App.css';
import MainNav from './MainNav';
import userimage from '../userimage.png';
// import ReactTable from 'react-table';
// import MaterialTable from 'material-table';
// import 'react-table/react-table.css';

class AdminProfile extends Component {
    state = { 
        bookings: []
     }


    componentDidMount() {
        // const url=process.env.REACT_APP_API_URL + `/protected/bookings`
        const url="http://localhost:5001/protected/bookings"
        axios.get(url)
            .then(res => this.setState({bookings: res.data}))
            // .then(res => console.log(res.data[0].booked_by.username))
            .catch(err => console.log(err))
    }

    gridRowStart = (booktime) => {

        const arrOfSlots = [
            {slot: "0830",rowStart: "2"},
            {slot: "0845",rowStart: "3"},
            {slot: "0900",rowStart: "4"},
            {slot: "0915",rowStart: "5"},
            {slot: "0930",rowStart: "6"},
            {slot: "0945",rowStart: "7"},
            {slot: "1000",rowStart: "8"},
            {slot: "1015",rowStart: "9"},
            {slot: "1030",rowStart: "10"},
            {slot: "1045",rowStart: "11"},
            {slot: "1100",rowStart: "12"},
            {slot: "1115",rowStart: "13"},
            {slot: "1130",rowStart: "14"},
            {slot: "1145",rowStart: "15"},
            {slot: "1200",rowStart: "16"},
            {slot: "1215",rowStart: "17"},
            {slot: "1230",rowStart: "18"},
            {slot: "1245",rowStart: "19"},
            {slot: "1300",rowStart: "20"},
            {slot: "1315",rowStart: "21"}
          ]
          
            const res = arrOfSlots.find((timeslot) => {
                if (timeslot.slot === booktime) {
                    return timeslot.rowStart
                }            
            })

            if(res){
                return res.rowStart
            }
    }

    gridRowEnd = (duration) => {
        if(duration == 30){
            return 2
        } else if(duration == 45){
            return 3
        } else {
            return 4
        }
    }

    gridColumn = (day) => {
        let gridColumn = ''

        switch(day){
            case "Monday":
                gridColumn = "2/3";
                break;
            case "Tuesday":
                gridColumn = "3/4";
                break;
            case "Wednesday":
                gridColumn = "4/5";
                break;
            case "Thursday":
                gridColumn = "5/6";
                break;
            case "Friday":
                gridColumn = "6/7";
                break;
            case "Saturday":
                gridColumn = "7/8";
                break;
            default: 
                gridColumn = ''
        }
        return gridColumn        
    }
    

    // dependent on the day, time and duration return css grid rules
    populateSchedule = () => {
        const schedule = document.querySelector('.sch-grid-outer')
        
        this.state.bookings.forEach((booking) => {            
            const div = document.createElement("div")
            const gridColumn = this.gridColumn(booking.day)
            const rowStart   = this.gridRowStart(booking.time)
            const rowEnd     = this.gridRowEnd(booking.duration)
            const student    = booking.booked_by.username
            
            div.style.gridColumn  = gridColumn
            div.style.gridRow     = `${rowStart}/span ${rowEnd}`
            div.style.background  = 'hsl('+Math.floor(Math.random()*361)+',50%,75%)'
            
            div.innerHTML = student
            div.style.fontSize = "12px"
            div.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            div.style.padding = "10px"

            schedule.append(div)
        }) 
    }

    render() {
       
     this.populateSchedule()

     return (
        <div className="wrapper">
            <MainNav />
            <div className={adminstyles.container}>
                <div className="adminprofile">
                    <div className="admin-panel">
                        <img src={userimage}  className="admin-pic" alt="User"/>
                        <Link to='/editbiodetails' className="pnl-link-1">Update Site Details</Link><br/>
                        <Link to='/students' className="pnl-link-2">Students</Link><br/>
                    </div>

                    <div className="schedule">
                        <p className="sub-heading">Schedule for the term</p>   
                        <div className="sch-grid-outer">
                            <div className="slots">Time</div>    
                            <div className="s1">08:30 - 08:45</div>
                            <div className="s2">08:45 - 09:00</div>
                            <div className="s3">09:00 - 09:15</div>
                            <div className="s4">09.15 - 09.30</div>
                            <div className="s5">09.30 - 09.45</div>
                            <div className="s6">09.45 - 10.00</div>
                            <div className="s7">10.00 - 10.15</div>
                            <div className="s8">10.15 - 10.30</div>
                            <div className="s9">10.30 - 10.45</div>
                            <div className="s10">10.45 - 11.00</div>
                            <div className="s11">11.00 - 11.15</div>
                            <div className="s12">11.15 - 11.30</div>
                            <div className="s13">11.30 - 11.45</div>
                            <div className="s14">11.45 - 12.00</div>
                            <div className="s15">12.00 - 12.15</div>
                            <div className="s16">12.15 - 12.30</div>
                            <div className="s17">12.30 - 12.45</div>
                            <div className="s18">12.45 - 13.00</div>
                            <div className="s19">13.00 - 13.15</div>
                            <div className="s20">13.15 - 13.30</div>


                            <div class="monday">Monday</div>
                            <div class="tuesday">Tuesday</div>
                            <div class="wednesday">Wednesday</div>
                            <div class="thursday">Thursday</div>
                            <div class="friday">Friday</div>
                            <div class="saturday">Saturday</div>    

                            <div class="mon-col"></div>  
                            <div class="tue-col"></div>
                            <div class="wed-col"></div>
                            <div class="thu-col"></div>
                            <div class="fri-col"></div>
                            <div class="sat-col"></div>                        
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
     );
    }
  }


export default AdminProfile;
