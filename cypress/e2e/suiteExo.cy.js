
describe("Exercice 2", () => {
    beforeEach(() => {
        cy.log("Avant tout");
        cy.visit("https://practice.automationtesteracademy.com/");
        cy.get('[data-testid="text-Inscrivez-vous"]').find('[data-testid="link-Inscrivez-vous"]').click();
        cy.url().should("eq", "https://practice.automationtesteracademy.com/signup");
        cy.url().should("include", "/signup");
    });

    it("Inscription", () => {
        cy.get('[data-test="input-prenom"]').type("Toto").should("have.value", "Toto");
        cy.get('[data-test="input-nom"]').type("Dupond").should("have.value", "Dupond");
        cy.get('[data-test="input-email"]').type("toto@dupond.com").should("have.value", "toto@dupond.com");
        cy.get('[data-test="input-mdp"]').type("Dupond12345").should("have.value", "Dupond12345");
        cy.get('[data-test="input-mdp-confirmation"]').type("Dupond12345").should("have.value", "Dupond12345");
        cy.get('[data-test="submit-signup"]').should("have.text", "S'inscrire").click();
        cy.url().should("eq", "https://practice.automationtesteracademy.com/home");
        cy.url().should("include", "/home");
    });

    it("Inscription champs vide", () => {
        cy.get('[data-test="submit-signup"]').should("have.text", "S'inscrire").click();
        cy.get('[data-test="error-message"]').eq(0).should("have.text", "Le prénom ne peut pas être vide.");
        cy.get('[data-test="error-message"]').eq(1).should("have.text", "Le nom ne peut pas être vide.");
        cy.get('[data-test="error-message"]').eq(2).should("have.text", "L'email ne peut pas être vide.");
        cy.get('[data-test="error-message"]').eq(3).should("have.text", "Le mot de passe ne peut pas être vide.");
        cy.get('[data-test="error-message"]').eq(4).should("have.text", "La confirmation du mot de passe ne peut pas être vide.");
        cy.get('[data-test="error-message"]').last().should("have.text", "Le mot de passe ne peut pas être vide.");
    });
  });