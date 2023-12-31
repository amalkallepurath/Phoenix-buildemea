import React, { useState, useEffect } from "react";
import './profile.css';
import axios from "axios";
import { useParams } from "react-router-dom";
function Profile() {
  let { id } = useParams();
  var n = { id };
  
  const [editt,editdata]=useState({
    one:true,
    two:true,
    three:true,
    a:true,
    b:true,
    c:true,
    d:true,
    e:true,
    f:true,
    g:true,
    h:true,
    i:true,
    j:true,
    k:true,
    l:true,
    m:true,
    n:true,
    data:true,
    z:true

  })
  const editdemo=()=>{
    editdata((prev) => {
      return { ...prev, one:!prev.one }
    });
  }
  const edittdemo=()=>{
    editdata((prev) => {
      return { ...prev, two:!prev.two}
    });
   
  }
  const edittdemo1=()=>{
    editdata((prev) => {
      return { ...prev, a:!prev.a}
    });
   
  }
  const edittdemo2=()=>{
    editdata((prev) => {
      return { ...prev, b:!prev.b}
    });
   }
   const edittdemo3=()=>{
    editdata((prev) => {
      return { ...prev, c:!prev.c}
    });
   }
   const edittdemo4=()=>{
    editdata((prev) => {
      return { ...prev, d:!prev.d}
    });
   }
   const edittdemo5=()=>{
    editdata((prev) => {
      return { ...prev, e:!prev.e}
    });
   }
    const edittdemo6=()=>{
    editdata((prev) => {
      return { ...prev, f:!prev.f}
    });
   }
   const edittdemo7=()=>{
    editdata((prev) => {
      return { ...prev, g:!prev.g}
    });
   }
   const edittdemo8=()=>{
    editdata((prev) => {
      return { ...prev, h:!prev.h}
    });
   }
   const edittdemo9=()=>{
    editdata((prev) => {
      return { ...prev, i:!prev.i}
    });
   }
   const edittdemo10=()=>{
    editdata((prev) => {
      return { ...prev, j:!prev.j}
    });
   }
    const edittdemo11=()=>{
    editdata((prev) => {
      return { ...prev, k:!prev.k}
    });
   }
    const edittdemo12=()=>{
    editdata((prev) => {
      return { ...prev, l:!prev.l}
    });
   }
    const edittdemo13=()=>{
    editdata((prev) => {
      return { ...prev, m:!prev.m}
    });
   }
    const edittdemo14=()=>{
    editdata((prev) => {
      return { ...prev, n:!prev.n}
    });
   }
   const edittdemo15=()=>{
    editdata((prev) => {
      return { ...prev, z:!prev.z}
    });
   }
  const [result, setdata] = useState(
    {res: [{
        name:"",
        email:"",
        dob:"",
        phone:"",
        address:"",
        genter:"",
        department:"",
        year:"",
        pname:"",
        pphone:"",
        paddress:"",
        relation:"",
        gname:"",
        gphone:"",
        gaddress:"",
        ephone:""
      }]
      
    });
    const [update,setupdate]=useState({
        name:"",
        email:"",
        dob:"",
        phone:"",
        address:"",
        genter:"",
        department:"",
        year:"",
        pname:"",
        pphone:"",
        paddress:"",
        relation:"",
        gname:"",
        gphone:"",
        gaddress:"",
        ephone:"",
        status:"",
        status2:"",
        status3:""
    });
    
    
  useEffect(() => {
    var dat = {
      id: id
    }
    axios.post("http://localhost/emea/viewprofile.php", dat).then(response => {
      setdata((prev) => {
        return { ...prev, res: response.data }
      });
    });


  }, []);

const updatetext=(e)=>{
      setupdate((prev) => {
    return { ...prev,[e.target.name]:e.target.value }
  });
    }
    const studentnameupdate=()=>{
     var studentnameupdate={
      name:update.name,
      id:id
     }
      axios.post("http://localhost/emea/studentnameupdate.php",studentnameupdate).then(response => {
     if(response.data==="updated"){
       setupdate((prev) => {
          return { ...prev,status:"update successfully" }
        });
      }
     else{
       setupdate((prev) => {
        return { ...prev,status:"error" }
      });
     }
    });

    }
    const studentemailupdate=()=>{
      var studentemailupdate={
       email:update.email,
       id:id
      }
       axios.post("http://localhost/emea/studentemailupdate.php",studentemailupdate).then(response => {
        if(response.data==="updated"){
          setupdate((prev) => {
             return { ...prev,status:"update successfully" }
           });
         }
        else{
          setupdate((prev) => {
           return { ...prev,status:"error" }
         });
        }
     });
     }
     const studentdobupdate=()=>{
      var studentdobupdate={
       dob:update.dob,
       id:id
      }
       axios.post("http://localhost/emea/studentdobupdate.php",studentdobupdate).then(response => {
        if(response.data==="updated"){
          setupdate((prev) => {
             return { ...prev,status:"update successfully" }
           });
         }
        else{
          setupdate((prev) => {
           return { ...prev,status:"error" }
         });
        }
     });
     }
     const studentphoneupdate=()=>{
      var studentphoneupdate={
       phone:update.phone,
       id:id
      }
       axios.post("http://localhost/emea/studentphoneupdate.php",studentphoneupdate).then(response => {
        if(response.data==="updated"){
          setupdate((prev) => {
             return { ...prev,status:"update successfully" }
           });
         }
        else{
          setupdate((prev) => {
           return { ...prev,status:"error" }
         });
        }
     });
     }
     const studentaddressupdate=()=>{
      var studentaddressupdate={
       address:update.address,
       id:id
      }
       axios.post("http://localhost/emea/studentaddressupdate.php",studentaddressupdate).then(response => {
        if(response.data==="updated"){
          setupdate((prev) => {
             return { ...prev,status:"update successfully" }
           });
         }
        else{
          setupdate((prev) => {
           return { ...prev,status:"error" }
         });
        }
     });
     }
     const studentdepartmentupdate=()=>{
     var studentdepartmentupdate={
        department:update.department,
       id:id
      }
       axios.post("http://localhost/emea/studentdepartmentupdate.php",studentdepartmentupdate).then(response => {
        if(response.data==="updated"){
          setupdate((prev) => {
             return { ...prev,status:"update successfully" }
           });
         }
        else{
          setupdate((prev) => {
           return { ...prev,status:"error" }
         });
        }
     });
     }
     const studentyearupdate=()=>{
      var studentyearupdate={
         year:update.year,
        id:id
       }
        axios.post("http://localhost/emea/studentyearupdate.php",studentyearupdate).then(response => {
          if(response.data==="updated"){
            setupdate((prev) => {
               return { ...prev,status:"update successfully" }
             });
           }
          else{
            setupdate((prev) => {
             return { ...prev,status:"error" }
           });
          }
      });
      }
      const studentgenterupdate=()=>{
        var studentgenterupdate={
           genter:update.genter,
          id:id
         }
          axios.post("http://localhost/emea/studentgenterupdate.php",studentgenterupdate).then(response => {
            if(response.data==="updated"){
              setupdate((prev) => {
                 return { ...prev,status:"update successfully" }
               });
             }
            else{
              setupdate((prev) => {
               return { ...prev,status:"error" }
             });
            }
        });
        }
        const parentnameupdate=()=>{
          var parentnameupdate={
             pname:update.pname,
            id:id
           }
            axios.post("http://localhost/emea/parentnameupdate.php",parentnameupdate).then(response => {
              if(response.data==="updated"){
                setupdate((prev) => {
                   return { ...prev,status2:"update successfully" }
                 });
               }
              else{
                setupdate((prev) => {
                 return { ...prev,status2:"error" }
               });
              }
          });
          }
          const parentphoneupdate=()=>{
            var parentphoneupdate={
               pphone:update.pphone,
              id:id
             }
              axios.post("http://localhost/emea/parentphoneupdate.php",parentphoneupdate).then(response => {
                if(response.data==="updated"){
                  setupdate((prev) => {
                     return { ...prev,status2:"update successfully" }
                   });
                 }
                else{
                  setupdate((prev) => {
                   return { ...prev,status2:"error" }
                 });
                }
            });
            }
            const parentaddressupdate=()=>{
              var parentaddressupdate={
                 paddress:update.paddress,
                id:id
               }
                axios.post("http://localhost/emea/parentaddressupdate.php",parentaddressupdate).then(response => {
                  if(response.data==="updated"){
                    setupdate((prev) => {
                       return { ...prev,status2:"update successfully" }
                     });
                   }
                  else{
                    setupdate((prev) => {
                     return { ...prev,status2:"error" }
                   });
                  }
              });
              }
              const parentrelationupdate=()=>{
                var parentrelationupdate={
                   relation:update.relation,
                  id:id
                 }
                  axios.post("http://localhost/emea/parentrelationupdate.php",parentrelationupdate).then(response => {
                    if(response.data==="updated"){
                      setupdate((prev) => {
                         return { ...prev,status2:"update successfully" }
                       });
                     }
                    else{
                      setupdate((prev) => {
                       return { ...prev,status2:"error" }
                     });
                    }
                });
                }
                const guardiannameupdate=()=>{
                  var guardiannameupdate={
                     gname:update.gname,
                    id:id
                   }
                    axios.post("http://localhost/emea/guardiannameupdate.php",guardiannameupdate).then(response => {
                      if(response.data==="updated"){
                        setupdate((prev) => {
                           return { ...prev,status3:"update successfully" }
                         });
                       }
                      else{
                        setupdate((prev) => {
                         return { ...prev,status3:"error" }
                       });
                      }
                  });
                  }
                  const guardianphoneupdate=()=>{
                    var guardianphoneupdate={
                       gphone:update.gphone,
                      id:id
                     }
                      axios.post("http://localhost/emea/guardianphoneupdate.php",guardianphoneupdate).then(response => {
                        if(response.data==="updated"){
                          setupdate((prev) => {
                             return { ...prev,status3:"update successfully" }
                           });
                         }
                        else{
                          setupdate((prev) => {
                           return { ...prev,status3:"error" }
                         });
                        }
                    });
                    }
                    const guardianaddressupdate=()=>{
                      var guardianaddressupdate={
                         gaddress:update.gaddress,
                        id:id
                       }
                        axios.post("http://localhost/emea/guardianaddressupdate.php",guardianaddressupdate).then(response => {
                          if(response.data==="updated"){
                            setupdate((prev) => {
                               return { ...prev,status3:"update successfully" }
                             });
                           }
                          else{
                            setupdate((prev) => {
                             return { ...prev,status3:"error" }
                           });
                          }
                      });
                      }
                      const emergencyupdate=()=>{
                        var emergencyupdate={
                           ephone:update.ephone,
                          id:id
                         }
                          axios.post("http://localhost/emea/emergencyupdate.php",emergencyupdate).then(response => {
                            if(response.data==="updated"){
                              setupdate((prev) => {
                                 return { ...prev,status3:"update successfully" }
                               });
                             }
                            else{
                              setupdate((prev) => {
                               return { ...prev,status3:"error" }
                             });
                            }
                        });
                        }
  return (
    <div>

<div id="handb">
<button onClick={edittdemo} id="editbtn">{editt.two === true ? "edit" : "cancel"}</button>
<h1>  student details</h1>

</div>


<table id="ptable">
<tr><td>name of student</td><td>{editt.one &&<p>{result.res[0].name}</p>}{!editt.one && !editt.two && <input type="text" onChange={updatetext}  name="name" />}<p></p></td><td>{!editt.two &&<button onClick={editdemo} id="editbtn">{editt.one === true ? "edit" : "cancel"}</button>}{!editt.one && !editt.two && <button  id="editbtn" onClick={studentnameupdate}>update</button>}</td></tr>
<tr><td>email of student</td><td>{editt.a &&<p>{result.res[0].email}</p>}{!editt.a && !editt.two && <input type="text" onChange={updatetext}  name="email" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo1} id="editbtn">{editt.a === true ? "edit" : "cancel"}</button>}{!editt.a && !editt.two && <button onClick={studentemailupdate} id="editbtn">update</button>}</td></tr>
<tr><td>DOB of student</td><td>{editt.b &&<p>{result.res[0].dob}</p>}{!editt.b && !editt.two && <input type="date"  onChange={updatetext} name="dob" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo2} id="editbtn">{editt.b === true ? "edit" : "cancel"}</button>}{!editt.b && !editt.two && <button onClick={studentdobupdate}  id="editbtn">update</button>}</td></tr>
<tr><td>phone number</td><td>{editt.f &&<p>{result.res[0].phone}</p>}{!editt.f && !editt.two && <input type="text"  onChange={updatetext} name="phone" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo6} id="editbtn">{editt.f === true ? "edit" : "cancel"}</button>}{!editt.f && !editt.two && <button onClick={studentphoneupdate} id="editbtn">update</button>}</td></tr>
<tr><td>address of student</td><td>{editt.c &&<p>{result.res[0].address}</p>}{!editt.c && !editt.two && <textarea onChange={updatetext} name="address"></textarea>}<p></p></td><td>{!editt.two &&<button onClick={edittdemo3} id="editbtn">{editt.c === true ? "edit" : "cancel"}</button>}{!editt.c && !editt.two && <button onClick={studentaddressupdate} id="editbtn">update</button>}</td></tr>
<tr><td>department</td><td>{editt.d &&<p>{result.res[0].department}</p>}{!editt.d && !editt.two && <select onChange={updatetext} name="department"><option value="no selected">---select---</option>
            <option value=" bsc computer science">bsc computer science</option>
            <option value="bsc micro biology">bsc micro biology</option>
            <option value="bsc bio techonology">bsc bio techonology</option>
            <option value="bsc bio chemistry">bsc bio chemistry</option>
            <option value="bsc maths & physics">bsc maths & physics</option>
            <option value="BA english">BA english</option>
            <option value="BA economics">BA economics</option>
            <option value="BA west asian studies">BA west asian studies</option>
            <option value="Bcom cooperation">Bcom cooperation</option>
            <option value="Bcom CA">Bcom CA</option>
            <option value="Bvoc logistic management">Bvoc logistic management</option>
            <option value="Bvoc accounting & taxation">Bvoc accounting & taxation</option>
            <option value="Bvoc banking & islamic finanace">Bvoc banking & islamic finanace</option></select>}<p></p></td><td>{!editt.two &&<button onClick={edittdemo4} id="editbtn">{editt.d === true ? "edit" : "cancel"}</button>}{!editt.d && !editt.two && <button  onClick={studentdepartmentupdate}  id="editbtn">update</button>}</td></tr>
<tr><td>year</td><td>{editt.e &&<p>{result.res[0].year}</p>}{!editt.e && !editt.two && <select onChange={updatetext} name="year"> <option value="no selected">---select---</option>
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="third">third</option></select>}<p></p></td><td>{!editt.two &&<button onClick={edittdemo5} id="editbtn">{editt.e === true ? "edit" : "cancel"}</button>}{!editt.e && !editt.two && <button onClick={studentyearupdate}  id="editbtn">update</button>}</td></tr>
<tr><td>genter</td><td>{editt.z &&<p>{result.res[0].genter}</p>}{!editt.z && !editt.two && <select onChange={updatetext}  name="genter" ><option value="">select</option>
            <option value="male">male</option>
            <option value="female">female</option></select>}<p></p></td><td>{!editt.two &&<button onClick={edittdemo15} id="editbtn">{editt.z === true ? "edit" : "cancel"}</button>}{!editt.z && !editt.two && <button onClick={studentgenterupdate}  id="editbtn">update</button>}</td></tr>
</table>
<p id="status">{update.status}</p>
<div id="handb">
<button onClick={edittdemo} id="editbtn">{editt.two === true ? "edit" : "cancel"}</button>
<h1> parent details</h1>

</div>
<table id="ptable">
 <tr><td>name of parent</td><td>{editt.g &&<p>{result.res[0].pname}</p>}{!editt.g && !editt.two && <input type="text" onChange={updatetext}   name="pname" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo7} id="editbtn">{editt.g === true ? "edit" : "cancel"}</button>}{!editt.g && !editt.two && <button onClick={parentnameupdate} id="editbtn">update</button>}</td></tr>
<tr><td>phone number</td><td>{editt.h &&<p>{result.res[0].pphone}</p>}{!editt.h && !editt.two && <input type="text" onChange={updatetext}   name="pphone" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo8} id="editbtn">{editt.h === true ? "edit" : "cancel"}</button>}{!editt.h && !editt.two && <button onClick={parentphoneupdate} id="editbtn">update</button>}</td></tr>
<tr><td>address of parent</td><td>{editt.i &&<p>{result.res[0].paddress}</p>}{!editt.i && !editt.two && <textarea onChange={updatetext} name="paddress"></textarea>}<p></p></td><td>{!editt.two &&<button onClick={edittdemo9} id="editbtn">{editt.i === true ? "edit" : "cancel"}</button>}{!editt.i && !editt.two && <button onClick={parentaddressupdate}  id="editbtn">update</button>}</td></tr>
<tr><td>relation</td><td>{editt.j &&<p>{result.res[0].relation}</p>}{!editt.j && !editt.two && <select onChange={updatetext} name="relation"><option value="no selected">---select---</option>
                <option value="son">son</option>
                <option value="daughter">daughter</option>
                <option value="brother">brother</option>
                <option value="sister">sister</option></select>}<p></p></td><td>{!editt.two &&<button onClick={edittdemo10} id="editbtn">{editt.j === true ? "edit" : "cancel"}</button>}{!editt.j && !editt.two && <button onClick={parentrelationupdate} id="editbtn">update</button>}</td></tr>
</table>
<p id="status">{update.status2}</p>
<div id="handb">
<button onClick={edittdemo} id="editbtn">{editt.two === true ? "edit" : "cancel"}</button>
<h1>  guardiant details</h1>

</div>
<table id="ptable">
<tr><td>name of  guardiant</td><td>{editt.k &&<p>{result.res[0].gname}</p>}{!editt.k && !editt.two && <input type="text"  onChange={updatetext}    name="gname" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo11} id="editbtn">{editt.k === true ? "edit" : "cancel"}</button>}{!editt.k && !editt.two && <button onClick={guardiannameupdate} id="editbtn">update</button>}</td></tr>
<tr><td>phone number</td><td>{editt.l &&<p>{result.res[0].gphone}</p>}{!editt.l && !editt.two && <input type="text"  onChange={updatetext}   name="gphone" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo12} id="editbtn">{editt.l === true ? "edit" : "cancel"}</button>}{!editt.l && !editt.two && <button onClick={guardianphoneupdate} id="editbtn">update</button>}</td></tr>
<tr><td>address of  guardiant</td><td>{editt.m &&<p>{result.res[0].gaddress}</p>}{!editt.m && !editt.two && <textarea  onChange={updatetext} name="gaddress"></textarea>}<p></p></td><td>{!editt.two &&<button onClick={edittdemo13} id="editbtn">{editt.m=== true ? "edit" : "cancel"}</button>}{!editt.m && !editt.two && <button onClick={guardianaddressupdate} id="editbtn">update</button>}</td></tr>
<tr><td>emergancy contact</td><td>{editt.n &&<p>{result.res[0].ephone}</p>}{!editt.n && !editt.two && <input type="text"  onChange={updatetext}   name="ephone" />}<p></p></td><td>{!editt.two &&<button onClick={edittdemo14} id="editbtn">{editt.n === true ? "edit" : "cancel"}</button>}{!editt.n && !editt.two && <button onClick={emergencyupdate} id="editbtn">update</button>}</td></tr>
</table>
<p id="status">{update.status3}</p>
     
           

    </div>
  )
}
export default Profile;