import React from 'react'
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Route, } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import EquipmentList from '../../pages/EquipmentManagers/EquipmentList'
import RoomList from '../../pages/RoomManagers/RoomList/RoomList'
import Withdraw from '../../pages/RoomManagers/Withdraw/Withdraw'

const Container = () => {
  return (
    <>
      <Route path="/Home/HomePage" component={HomePage} />
      <Route path="/Home/RoomList" component={RoomList} />
      <Route path="/Home/Withdraw" component={Withdraw} />
      <Route path="/Home/EquimentList" component={EquipmentList} />
    </>
  )
}

export default Container
