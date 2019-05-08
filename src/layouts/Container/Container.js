import React from 'react'
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Route, } from 'react-router-dom'
import EquipmentList from '../../pages/EquipmentManagers/EquipmentList'
import RoomList from '../../pages/RoomManagers/RoomList/RoomList'

const Container = () => {
  return (
    <>
      <Route path="/Home/RoomList" component={RoomList} />
      <Route path="/Home/EquimentList" component={EquipmentList} />
    </>
  )
}

export default Container
