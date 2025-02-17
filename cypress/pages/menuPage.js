class MenuPage {

    selectorLists() {
        const selectors = {
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']"
        }

        return selectors
    }

    acessMyInfo() {
        cy.get(this.selectorLists().myInfoButton).click()
    }

    acessAdmin() {
        cy.get(this.selectorLists().adminButton).click()
    }

    acessPIM() {
        cy.get(this.selectorLists().pimButton).click()
    }

    acessLeave() {
        cy.get(this.selectorList().leaveButton).click()
    }

    acessTime() {
        cy.get(this.selectorLists().timeButton). click()
    }

    acessRecruitment() {
        cy.get(this.selectorLists().recruitmentButton).click()
    }

    acessPerformance() {
        cy.get(this.selectorLists().performanceButton).click()
    }

    acessDirectory() {
        cy.get(this.selectorLists().directoryButton).click()
    }

    acessMaintenace() {
        cy.get(this.selectorLists().maintenanceButton).click()
    }

    acessClaim() {
        cy.get(this.selectorLists().claimButton).click()
    }

    acessBuzz() {
        cy.get(this.selectorLists().buzzButton).click()
    }
    
}


export default MenuPage