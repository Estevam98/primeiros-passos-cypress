import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/MenuPage.js'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  

  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.acessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('IdTest', chance.fbid(), '156784', '1982-02-02')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

})