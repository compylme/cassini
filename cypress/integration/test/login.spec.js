Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  })

  let rowsLength;
  
  describe ('login', () =>{
	beforeEach(() => {
		cy.visit('https://login.yahoo.com')

	  //convert xlsx to json
	  cy.task('readXlsx', { file: "cypress/fixtures/Credentials.xlsx", sheet: "Credentials" }).then((rows) => {
		rowsLength = rows.length;
		cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
	   })
		
	   })

	it.only('signin', () => {

		cy.fixture('xlsxData').then((data) => {

		//enter username
		cy.login('login')
		cy.get('@login').type(data.rows[0].username)
		cy.username_enter()

		//Guard
		cy.url().should('include', 'display=login&authMechanism=primary');

		//enter password
		cy.get('[type="password"]').invoke('removeAttr', 'target').type(data.rows[0].password)
		cy.password_enter()

		//navigate to finance
		cy.finance()
		cy.wait(1000)

		//navigate to market data
		cy.get('[title="Market Data"]').click({force:true});
		cy.wait(1000)

		//navigate to calendar
		cy.get('[title="Calendar"]').click({force:true});

		//select date
		cy.date_picker()

		//arrange data
		cy.april_11('datedata')

		 //assert data returned
		 cy.get('@datedata').children().eq(1).invoke('prop','text').invoke('replace', /\u00a0/g, ' ')
			.then((vals) => {let value = cy.wrap(vals)
			expect(vals).to.equal(vals)})
		 cy.get('@datedata').children().eq(2).invoke('prop','text').invoke('replace', /\u00a0/g, ' ')
			.then((vals) => {let value = cy.wrap(vals)
			expect(vals).to.equal(vals)})
		 cy.get('@datedata').children().eq(3).invoke('prop','text').invoke('replace', /\u00a0/g, ' ')
			.then((vals) => {let value = cy.wrap(vals)
			expect(vals).to.equal(vals)})
		 cy.get('@datedata').children().eq(4).invoke('prop','text').invoke('replace', /\u00a0/g, ' ')
			.then((vals) => {let value = cy.wrap(vals)
			expect(vals).to.equal(vals)})
		})
	})
	
})