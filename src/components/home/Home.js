import React, { useState,useEffect } from 'react';
import { Create } from '@material-ui/icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './home.css'
const Home = () => {
    const [allData,setAllData]=useState()

    const [checked,setChecked]=useState(true);
    const [checkedTwo,setCheckedTwo]=useState(false);
    const [checkedThree,setCheckedThree]=useState(false);
    const [checkBox,setCheckBox]=useState(false);

    const [checkBoxData,setCheckBoxData]=useState('no');

    const [location,setShowLocation]=useState(true);
    const [hideLocation,setHideLocation]=useState(false);

    const [Country,setCountry]=useState(false);
    const [Language,setLanguage]=useState(false);

    const [companyName,setCompanyName]=useState('')


const [mapOne,setMapOne]=useState(true);
const [mapTwo,setMapTwo]=useState(false);
const [mapOneBgColor,setMapOneBgColor]=useState('');
const [mapTwoBgColor,setMapTwoBgColor]=useState('');


const [street,setStreet]=useState('')
const [city,setCity]=useState('')
const [yourRole,setYourRole]=useState('')
const [budget,setBudget]=useState('')
const [mapDataValue,setMapDataValue]=useState('')
const [countryData,setCountryData]=useState('')
const [provinceData,setProvinceData]=useState('')
const [languageData,setLanguageData]=useState('')
const [province,setProvince]=useState('')
const [jobTitleData,setJobTitleData]=useState('')
const [remoteData,setRemoteData]=useState('')



    const [counter,setCounter]=useState(0);

    const sendData=()=>{
        setAllData(
            {
            "street":street,
            "city":city,
            "yourRole":yourRole,
            "budget":budget,
            "mapDataValue":mapDataValue,
            "countryData":countryData,
            "languageData":languageData,
            "job title":jobTitleData,
            "province":provinceData,
            "alwaysHiring":checkBoxData,
            "Remote work":remoteData,
            "city province":province,
            "Number of Hire":counter
            }
        )
        alert("Data submited to localStorage successfully!")
    }

    const Dec=()=>{
        if(counter===0) return;
        setCounter(counter-1)
    }
    const Inc=()=>{
        setCounter(counter+1)
    }

    const checkedradio=()=>{
        setCheckedTwo(false)
        setChecked(true)
        setCheckedThree(false)
        setRemoteData('yes')
    }
    const checkedTworadio=()=>{
        setCheckedTwo(true)
        setChecked(false)
        setCheckedThree(false)
        setRemoteData('Temporary')

    }
    const checkedThreeradio=()=>{
        setCheckedTwo(false)
        setChecked(false)
        setCheckedThree(true)
        setRemoteData('no')

    }
    const ShowLocation=()=>{
          setHideLocation(false)
          setShowLocation(true)  
    }
    const HideLocation=()=>{
        setHideLocation(true)
        setShowLocation(false) 
    }
    const showCountry=()=>{
        setCountry(true)
    }
    const showLanguage=()=>{
        setLanguage(true)
    }
// location

const checkBoxValue=()=>{
    setCheckBox(!checkBox)
    if(checkBoxData==='no') return setCheckBoxData("Always hiring")
    if(checkBoxData==='Always hiring') return setCheckBoxData("no")

}



const selectMapOne=()=>{
    setMapOne(!mapOne)
    setMapTwo(!mapTwo)
    setMapTwoBgColor('bg')
    setMapOneBgColor('')
    
}
const selectMapTwo=()=>{
    setMapOne(!mapOne)
    setMapTwo(!mapTwo)
    setMapOneBgColor('bg')
    setMapTwoBgColor('')
}



useEffect(()=>{
    localStorage.setItem("allData",JSON.stringify(allData))
},[allData])



    return (
        <div className="home">
           
            <div className="title">
                <h1>Indeed for employers</h1>
                <h4>indeed for employers</h4>
            </div>
            <div className="body">
                <h3>Lets get started</h3>
                <div className="inputBody">
                    <h4 className="inputLabel">Company name for this job *</h4>
                    <input className="inputText" value={companyName} onChange={(e)=>setCompanyName(e.target.value)}  />


                    <h4 className="inputLabel">Your role in the hiring process</h4>
                    <select className="selectText"  onChange={(e)=>setYourRole(e.target.value)}>
                        <option selected disabled>Select an option</option>
                        <option value="optionOne">Option one</option>
                        <option value="optionTwo">Option two</option>
                        <option value="optionThree">Option three</option>
                        <option value="optionFour">Option four</option>
                        <option value="optionFive">Option five</option>
                    </select>
                    <h4 className="inputLabel">Your typical hiring budget</h4>
                    <select className="selectText"  onChange={(e)=>setBudget(e.target.value)}>
                    <option selected disabled>Select an option</option>
                        <option value="RoleOne">ROle one</option>
                        <option value="RoleTwo">Role two</option>
                        <option value="RoleThree">Role three</option>
                        <option value="RoleFour">Role four</option>
                        <option value="RoleFive">Role five</option>
                    </select>

                    <h4 className="inputLabel">job title *</h4>
                    <input className="inputText" value={jobTitleData}  onChange={(e)=>setJobTitleData(e.target.value)} />


                    <div className="radioButon">
                        <h3 className="radioButtonHeader">Where will an employee report to work?*</h3>
                        <div className="buttonOne" onClick={()=>ShowLocation()}>
                             <input className="radio" type="radio" name="location" value="specificlocation" checked={location} />
                             <span className="radioSpan">Employees report to a specific location</span> 
                        </div>
                        <div className="buttonOne" onClick={()=>HideLocation()}>
                             <input className="radio" type="radio" name="location" value="notaspecificlocation" checked={hideLocation} />
                             <span className="radioSpan">Employees will not report to a specific location</span>
                        </div>
                    </div>
{/*location*/}
                    {/* <Location location={location} hideLocation={hideLocation}  /> */}
                    <div>
            <div className="wrapper">
                {
                  location===true? (
     <>
             <h4>How do you want your location displayed to job seekers?</h4>

            <div className="map">

                <div className="map1">
                <Card sx={{ Width: 200,Height:200 }} className={`${mapOneBgColor}`}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                    <div className="radioB" onClick={()=>selectMapOne()}>
                             <input className="radioLocation" type="radio" name="map" value="mapone" onChange={(e)=>setMapDataValue(e.target.value)} />
                        <Typography gutterBottom variant="h6" component="div">
                             Display exact location
                        </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                        Job seekers will see a map with a location pin.
                        </Typography>
                    </CardContent>
                </Card>
                </div>
                <div className="map2">
                <Card sx={{ Width: 200,Height:200 }} className={`${mapTwoBgColor}`}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <div className="radioB" onClick={()=>selectMapTwo()}>
                             <input className="radioLocation" type="radio" name="map" value="maptwo" onChange={(e)=>setMapDataValue(e.target.value)} />
                        <Typography gutterBottom variant="h6" component="div">
                             Hide exact location
                        </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                             Job seekers will see a map with a location pin.
                        </Typography>
                    </CardContent>
                </Card>
                </div>


            </div>
                <div className="address">
                    <h4 className="inputLabel">Enter a street address</h4>
                    <input className="inputText" value={street} onChange={(e)=>setStreet(e.target.value)}  />
                    <h4 className="inputLabel">City *</h4>
                    <input className="inputText" value={city} onChange={(e)=>setCity(e.target.value)}  />

                    <h4 className="inputLabel">Province *</h4>
                    <select className="selectText"  onChange={(e)=>setProvinceData(e.target.value)}>
                        <option>--</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>

                </div>
   </>             
                  ):
                  <>

                    <h4 className="inputLabel">Where would you like to advertise this job? *</h4>
                    <span className="provinceSpan">Enter a city and province</span>
                    <input className="inputText" value={province} onChange={(e)=>setProvince(e.target.value)}  />
</>
}
 {/*  */}
            </div>

        </div>




{/* location */}
                    {
                        Country===false? 
                    (
                        <div className="country">
                              <h4>Country: India</h4>
                                   <Create className="createIcon" onClick={()=>showCountry()} />
                        </div>
                    ) :

                    (
                        <>    
                         <h4 className="inputLabel">Country</h4>
                         <select className="selectText"  onChange={(e)=>setCountryData(e.target.value)}>
                        <option selected disabled>Select an option</option>  
                        <option value="India">India</option>  
                        <option value="usa">Usa</option>  
                        <option value="canada">Canada</option>  
                        <option value="russia">Russia</option>  
                        <option value="china">China</option>  
                    </select>
                    </>
                    )
                    }  
                {
                    Language===false?
                    (
                
                        <div className="language">
                              <h4>Job posting will be displayed in: English</h4>
                                   <Create className="createIcon" onClick={()=>showLanguage()} />
                        </div>
                    ):
                    (
                    <>
                    <h4 className="inputLabel">What language will your job posting be displayed in?</h4>
                    <select className="selectText"  onChange={(e)=>setLanguageData(e.target.value)}>
                        <option selected disabled>Select an option</option>  
                        <option value="english">English</option>  
                        <option value="hindi">Hindi</option>  
                        <option value="assamese">Assamese</option>  
                        <option value="bengali">Bengali</option>  
                        <option value="gujrati">Gujrati</option>  
                    </select>
                </>
                    )
}




                    <div className="radioButon">
                        <h3 className="radioButtonHeader">Can this job be performed remotely, meaning primarily from home? If so, we’ll add a “Remote” tag to your post </h3>
                        <div className="buttonOne" onClick={()=>checkedradio()}>
                             <input className="radio" type="radio" name="radio" value="yes"   checked={checked} />
                             <span className="radioSpan">Yes</span> 
                        </div>
                        <div className="buttonOne" onClick={()=>checkedTworadio()}>
                             <input className="radio" type="radio" name="radio" value="Temporary"  checked={checkedTwo} />
                             <span className="radioSpan">Temporarily due to COVID-19</span>
                        </div>
                        <div className="buttonOne" onClick={()=>checkedThreeradio()}>
                             <input className="radio" type="radio" name="radio" value="no"   checked={checkedThree} />
                             <span className="radioSpan">No</span>
                        </div>
                    </div>
                    <h4>How many hires? *</h4>
                    <span>This helps us match you with the right number of applicants.</span>
                    {/* <input className="inputText"  /> */}
                    {
                        checkBox===true? (
                            <div className="inputText inputTextInner disabledColor">
                            <input className="hire disabledColor" disabled value={counter} />
                            <button className="btn1 disabledColor" disabled >-</button>
                            <button className="btn1 m20 disabledColor" disabled checked={false} onClick={()=>Inc} >+</button>
                        </div>
                        )
                        :
                        (
                            <div className="inputText inputTextInner">
                            <input className="hire" value={counter}  />
                            <button className="btn1" onClick={()=>Dec()}>-</button>
                            <button className="btn1 m20" onClick={()=>Inc()} checked={false} >+</button>
                        </div>
                        )
                    }

                    <label>
                        <input type="checkbox" onChange={()=>checkBoxValue()}   />
                       <span> Always hiring</span>
                    </label>
                </div>
            </div>
            {/* submit  */}

            <div className="submitButton">
                <button className="submit" onClick={()=>sendData()}>Continue</button>
            </div>
        </div>
    );
}

export default Home;
