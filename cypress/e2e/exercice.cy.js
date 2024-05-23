describe("Premier Exo", () => {
    beforeEach(() => {
        cy.log("Avant chaque scénario");
        cy.visit("https://practice.automationtesteracademy.com/");
    });

    it("Connexion", () => {
      cy.get('[data-testid="logo-img-login"]').should("be.visible");
      cy.get('[data-test="username-login"]')
        .type("login_user")
        .should("have.value", "login_user");
      cy.get('[data-test="password-login"]')
        .type("cypress-geek")
        .should("have.value", "cypress-geek");
      cy.get('[data-test="remember-login"]').check();
      cy.get('[data-test="submit-login"]')
        .should("have.text", "Se Connecter")
        .click();
      cy.url().should("eq", "https://practice.automationtesteracademy.com/home");
      cy.url().should("include", "/home");
    });

    it("Oublie de mot de passe", () => {
        cy.get('[data-test="username-login"]').type("utilisateur_connu").should("have.value", "utilisateur_connu");
        cy.get('[data-test="submit-login"]').should("have.text", "Se Connecter").click();
        cy.get(".error-message").should("be.visible").and("have.text", "Veuillez renseigner votre mot de passe")
    });

    it("Mot de passe erroné", () => {
        cy.get('[data-test="username-login"]').type("enter_user").should("have.value", "enter_user");
        cy.get('[data-test="password-login"]').type("cypr-geek").should("have.value", "cypr-geek");
        cy.get('[data-test="remember-login"]').check();
        cy.get('[data-test="submit-login"]').should("have.text", "Se Connecter").click();
        cy.get(".error-message").should("be.visible").and("have.text", "Veuillez vérifier votre nom d'utilisateur ou mot de passe");
    });

    it("Redirection vers l'inscription", () => {
        cy.get('[data-testid="text-Inscrivez-vous"]').find('[data-testid="link-Inscrivez-vous"]').click();
        cy.url().should("eq", "https://practice.automationtesteracademy.com/signup");
        cy.url().should("include", "/signup");
    });
  });
