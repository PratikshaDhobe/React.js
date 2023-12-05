import React from 'react'
import PropTypes from 'prop-types';



// function Student(props) {
//   return (
//     <div>
//       <h2>Name:{props.Name}</h2>
//       <p>Dob:{props.Dob}</p>
//       <p>City:{props.City}</p>
//     </div>
//   )
// }

// export default Student


                                        // method 2



function Student({Name,dob,city}) {
  return (
    <div>
      <h2>Name:{Name}</h2>
      <p>Dob:{dob}</p>
      <p>City:{city}</p>
    </div>
  )
}
export default Student



                                        // method 3
// import React from 'react'

// function Student({this.props.}) { 
//     const {Name,dob,city}
//   return (
//     <div>
//       <h2>Name:{Name}</h2>
//       <p>Dob:{dob}</p>
//       <p>City:{city}</p>
//     </div>
//   )
// }

// export default Student

Student.PropTypes={
  name:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired,
  city:PropTypes.string.isRequired
}

Student.defaultProps={
  name:'enter name',
  age:'enter age',
  city:'enter city'
}





