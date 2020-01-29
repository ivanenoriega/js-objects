var should = chai.should;
var expect = chai.expect;
var assert = chai.assert;

describe("Validamos el objeto fiat500", function() {
  // Atributos
  it("Atributo name", function() {
    expect(fiat500)
      .to.have.property("name")
      .and.to.be.an("string")
      .and.to.equal("Fiat");
  });
  it("Atributo model", function() {
    expect(fiat500)
      .to.have.property("model")
      .and.to.be.an("number")
      .and.to.equal(500);
  });
  it("Atributo weight", function() {
    expect(fiat500)
      .to.have.property("weight")
      .and.to.be.an("number")
      .and.to.equal(850);
  });
  it("Atributo color", function() {
    expect(fiat500)
      .to.have.property("color")
      .and.to.be.an("string")
      .and.to.equal("white");
  });
  it("Atributo owners", function() {
    expect(fiat500)
      .to.have.property("owners")
      .and.to.be.an("Array")
      .and.includes("Jason")
      .and.includes("Steven")
      .and.includes("Cacho");
  });

  // Metodos
  it("Metodo start", function() {
    expect(fiat500.start())
      .to.be.an("string")
      .and.to.equal("Encender...");
  });
  it("Metodo drive", function() {
    expect(fiat500.drive())
      .to.be.an("string")
      .and.to.equal("Manejar...");
  });
  it("Metodo brake", function() {
    expect(fiat500.brake())
      .to.be.an("string")
      .and.to.equal("Detener...");
  });
  it("Metodo stop", function() {
    expect(fiat500.stop())
      .to.be.an("string")
      .and.to.equal("Apagar...");
  });
});

describe("Validamos el objeto peugeot208", function() {
  // Atributos
  it("Atributo name", function() {
    expect(peugeot208)
      .to.have.property("name")
      .and.to.be.an("string")
      .and.to.equal("Peugeot");
  });
  it("Atributo model", function() {
    expect(peugeot208)
      .to.have.property("model")
      .and.to.be.an("number")
      .and.to.equal(208);
  });
  it("Atributo weight", function() {
    expect(peugeot208)
      .to.have.property("weight")
      .and.to.be.an("number")
      .and.to.equal(950);
  });
  it("Atributo color", function() {
    expect(peugeot208)
      .to.have.property("color")
      .and.to.be.an("string")
      .and.to.equal("black");
  });
  it("Atributo owners", function() {
    expect(peugeot208)
      .to.have.property("owners")
      .and.to.be.an("Array")
      .and.includes("Monica")
      .and.includes("Jeorge")
      .and.includes("Fernanda");
  });
  it("Atributo state", function() {
    expect(peugeot208)
      .to.have.property("state")
      .and.to.be.an("string")
      .and.to.equal("Apagado");
  });

  // Metodos
  it("Metodo info", function() {
    peugeot208.state = "Apagado";
    expect(peugeot208.info())
      .to.be.an("string")
      .and.to.equal(
        "Este auto marca Peugeot, es modelo 208, pesa exactamente 950kg, su color es black y su actual dueño es Fernanda"
      );
  });
  it("Metodo start", function() {
    peugeot208.state = "Apagado";
    expect(peugeot208.start())
      .to.be.an("string")
      .and.to.equal("Encender...");
    expect(peugeot208.state)
      .to.be.an("string")
      .and.to.equal("Encendido");
  });
  it("Metodo drive", function() {
    peugeot208.state = "Encendido";
    expect(peugeot208.drive())
      .to.be.an("string")
      .and.to.equal("Manejar...");
    expect(peugeot208.state)
      .to.be.an("string")
      .and.to.equal("En movimiento");
  });
  it("Metodo brake", function() {
    peugeot208.state = "En movimiento";
    expect(peugeot208.brake())
      .to.be.an("string")
      .and.to.equal("Detener...");
    expect(peugeot208.state)
      .to.be.an("string")
      .and.to.equal("Detenido");
  });
  it("Metodo stop", function() {
    peugeot208.state = "Detenido";
    expect(peugeot208.stop())
      .to.be.an("string")
      .and.to.equal("Apagar...");
    expect(peugeot208.state)
      .to.be.an("string")
      .and.to.equal("Apagado");
  });
});
