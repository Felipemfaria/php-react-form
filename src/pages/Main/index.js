import React from "react";
import "./styles.css";
import "bootstrap-material-design/dist/js/bootstrap-material-design";
import "../../controllers/FormEntidade/index";
import axios from "axios";
import InputMask from "react-input-mask";
import $ from "jquery";

const API_PATH = "http://localhost/formularioCS/src/api/index.php";
const API_PATH_GET = "http://localhost/formularioCS/src/api/getData.php";

/*ReactDOM.render(
  <Teste name="<?php echo json_encode($sent->this.state.sent); ?>" />,
  document.getElementById("testando")
);*/

class FormEntidade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnpjEntidade: "",
      nomeEntidade: "",
      nomeFantasia: "",
      logradouro: "",
      numEntidade: "",
      complemento: "",
      bairroEntidade: "",
      cepEntidade: "",
      cidadeEntidade: "",
      nomeRespEntidade: "",
      telEntidade: "",
      leiEntidade: "",
      dataFundEntidade: "",
      cargoRespEntidade: "",
      objetivoEntidade: "",
      atividadesEntidade: "",
      justificativaEntidade: "",
      dataReuniaoEntidade: "",
      areaEntidade: "",
      publicoEntidade: "",
      qtdPessoasAssistidas: "",
      qtdFamiliasAssistidas: "",
      cestaBasicaRB: "",
      qtdCestaBasica: 0,
      frequenciaCestaRB: "",
      nomePriRepresentante: "",
      telPriRepresentante: "",
      endPriRepresentante: "",
      nomeSegRepresentante: "",
      telSegRepresentante: "",
      endSegRepresentante: "",
      telRespEntidade: "",
      endRespEntidade: "",
      formSent: false,
      error: null,
      sent: false,
      array: []
    };
    this.repositories = "";

    this.radioCesta = this.radioCesta.bind(this);
    this.radioFrequencia = this.radioFrequencia.bind(this);
    this.exibirValor = this.exibirValor.bind(this);
  }

  radioFrequencia(event) {
    this.setState({
      frequenciaCestaRB: event.target.value
    });
  }

  radioCesta(event) {
    this.setState({
      cestaBasicaRB: event.target.value
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "Content-Type": "application / json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          formSent: true
        });
      })
      .catch(error => this.setState({ error: error }));
  };

  handleSearchForm = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH_GET}`,
      headers: { "Content-Type": "application / json" },
      data: this.state
    })
      .then(result => {
        const resultado = result;

        this.setState({
          nomeEntidade: resultado.data
        });
      })
      .catch(error => this.setState({ error: error }));
  };

  componentDidMount() {
    window.addEventListener("load", this.pesquisaBD);
  }

  pesquisaBD() {
    $("#nomeEntidade");
  }

  validaCNPJ = () => {
    if (this.state.cnpjEntidade === "00.000.000/0000-00") {
      alert("CNPJ inválido");
    }
  };

  ValidaTelefone = () => {
    const { telEntidade } = this.state;
    if (telEntidade === "(__)_____-____") {
      alert("O campo de telefone não pode estar vazio");
      return false;
    } else {
      var exp = /\(\d{2}\)\d{5}-\d{4}/;
      if (!exp.test(telEntidade)) {
        console.log(telEntidade);
        alert("Numero de Telefone Invalido!");
        return false;
      } else {
      }
    }
  };

  //valida CEP
  ValidaCep = () => {
    const { cepEntidade } = this.state;

    if (cepEntidade === "_____-___") {
      alert("O campo CEP não pode ficar vazio!");
    } else {
      var exp = /\d{2}\d{3}-\d{3}/;
      if (!exp.test(cepEntidade)) {
        //alert("Numero de Cep Invalido!");

        alert("Numero de Cep Invalido!");
        return false;
      } else {
      }
    }
  };

  exibirValor = e => {
    e.preventDefault();
    this.setState({ nomeEntidade: this.state.sent });
    console.log(this.state.nomeEntidade);
  };

  render() {
    const {
      nomeEntidade,
      nomeFantasia,
      logradouro,
      complemento,
      bairroEntidade,
      cepEntidade,
      cidadeEntidade,
      numEntidade,
      nomeRespEntidade,
      cnpjEntidade,
      telEntidade,
      leiEntidade,
      dataFundEntidade,
      cargoRespEntidade,
      objetivoEntidade,
      atividadesEntidade,
      justificativaEntidade,
      dataReuniaoEntidade,
      areaEntidade,
      publicoEntidade,
      qtdPessoasAssistidas,
      qtdFamiliasAssistidas,
      qtdCestaBasica,
      nomePriRepresentante,
      telPriRepresentante,
      endPriRepresentante,
      nomeSegRepresentante,
      telSegRepresentante,
      endSegRepresentante,
      telRespEntidade,
      endRespEntidade
    } = this.state;

    return (
      <form>
        <div className="container">
          <div className="row">
            <div className="col-lg-12" id="titleform">
              <h3>Formulario de Cadastro de Entidades</h3>
            </div>

            <div id="formDescription" className="col-md-12">
              <p>
                Este formulário tem como finalidade realizar o cadastro de
                Entidades interessadas em participar do programa de doações da
                Central da Solidariedade
              </p>
            </div>
          </div>
          <label>* Campos obrigatórios</label>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-10 ">
                  <div id="testantdo">
                    <label id="labelForm" className="">
                      Nome da Entidade*
                    </label>
                    <input
                      required="required"
                      className="form-control"
                      type="string"
                      id="nomeEntidade"
                      value={nomeEntidade}
                      onChange={e =>
                        this.setState({ nomeEntidade: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-md-2" id="">
                  <button
                    className="btn btn-raised btn-secondary"
                    id="botaoPesquisar"
                    type="submit"
                    value="submit"
                    onClick={e => this.handleSearchForm(e)}
                  >
                    Pesquisar
                  </button>
                </div>
              </div>
              <div>
                <label id="labelForm">Nome Fantasia</label>
                <input
                  className="form-control"
                  type="text"
                  id="nomeFantasia"
                  value={nomeFantasia}
                  onChange={e =>
                    this.setState({ nomeFantasia: e.target.value })
                  }
                />
                <div className="row">
                  <div className="col-md-6">
                    <label id="labelForm">Logradouro*</label>
                    <input
                      className="form-control"
                      type="text"
                      id="logradouro"
                      value={logradouro}
                      onChange={e =>
                        this.setState({ logradouro: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label id="labelForm">Número</label>
                    <input
                      className="form-control"
                      type="text"
                      id="numEntidade"
                      value={numEntidade}
                      onChange={e =>
                        this.setState({ numEntidade: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label id="labelForm">Complemento</label>
                    <input
                      className="form-control"
                      type="text"
                      id="complemento"
                      value={complemento}
                      onChange={e =>
                        this.setState({ complemento: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label id="labelForm">Bairro</label>
                    <input
                      className="form-control"
                      type="text"
                      id="bairroEntidade"
                      value={bairroEntidade}
                      onChange={e =>
                        this.setState({ bairroEntidade: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label id="labelForm">Cep*</label>
                    <InputMask
                      mask="99999-999"
                      className="form-control"
                      type="text"
                      id="cepEntidade"
                      onBlur={this.ValidaCep}
                      value={cepEntidade}
                      onChange={e =>
                        this.setState({ cepEntidade: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-5">
                    <label id="labelForm">Cidade*</label>
                    <input
                      className="form-control"
                      type="text"
                      id="cidadeEntidade"
                      value={cidadeEntidade}
                      onChange={e =>
                        this.setState({ cidadeEntidade: e.target.value })
                      }
                    />
                  </div>
                </div>
                <label id="labelForm">Nome do responsável pela Entidade*</label>
                <input
                  className="form-control"
                  type="text"
                  id="nomeRespEntidade"
                  value={nomeRespEntidade}
                  onChange={e =>
                    this.setState({ nomeRespEntidade: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="col-md-4">
              <label id="labelForm">CNPJ</label>
              <InputMask
                mask="99.999.999/9999-99"
                className="form-control"
                type="text"
                id="cnpjEntidade"
                onBlur={this.validaCNPJ}
                value={cnpjEntidade}
                onChange={e => this.setState({ cnpjEntidade: e.target.value })}
              />
              <label id="labelForm">Telefone para contato*</label>
              <InputMask
                mask="(99)99999-9999"
                className="form-control"
                type="text"
                onBlur={this.ValidaTelefone}
                id="telEntidade"
                value={telEntidade}
                onChange={e => this.setState({ telEntidade: e.target.value })}
              />
              <label id="labelForm">Lei de utilidade pública Nº</label>
              <input
                className="form-control"
                type="text"
                id="leiEntidade"
                value={leiEntidade}
                onChange={e => this.setState({ leiEntidade: e.target.value })}
              />
              <label id="labelForm">Data de fundação</label>
              <InputMask
                mask="99/99/9999"
                className="form-control"
                type="text"
                id="dataFundEntidade"
                value={dataFundEntidade}
                onChange={e =>
                  this.setState({ dataFundEntidade: e.target.value })
                }
              />
              <label id="labelForm">Cargo</label>
              <input
                className="form-control"
                type="text"
                id="cargoRespEntidade"
                value={cargoRespEntidade}
                onChange={e =>
                  this.setState({ cargoRespEntidade: e.target.value })
                }
              />
            </div>
          </div>
          <label id="labelForm">Objetivo principal da Entidade:</label>
          <div>
            <textarea
              className="form-control z-depth-1"
              id="objetivoEntidade"
              rows="2"
              maxLength="500"
              value={objetivoEntidade}
              onChange={e =>
                this.setState({ objetivoEntidade: e.target.value })
              }
            />
          </div>
          <label id="labelForm">Atividades que realiza:</label>
          <div>
            <textarea
              className="form-control z-depth-1"
              id="atividadesEntidade"
              rows="2"
              maxLength="500"
              value={atividadesEntidade}
              onChange={e =>
                this.setState({ atividadesEntidade: e.target.value })
              }
            />
            <label id="labelForm">
              O que levou esta entidade a realizar este trabalho
              (justificativa). Quais os objetivos já alcançados?
            </label>
            <div>
              <textarea
                className="form-control z-depth-1"
                id="justificativaEntidade"
                rows="3"
                maxLength="1000"
                value={justificativaEntidade}
                onChange={e =>
                  this.setState({ justificativaEntidade: e.target.value })
                }
              />
            </div>
            <label id="labelForm">
              Data/Horário/Local de Reunião do Órgão Administrativo:
            </label>
            <div>
              <textarea
                className="form-control z-depth-1"
                id="dataReuniaoEntidade"
                rows="1"
                maxLength="500"
                value={dataReuniaoEntidade}
                onChange={e =>
                  this.setState({ dataReuniaoEntidade: e.target.value })
                }
              />
            </div>
            <label id="labelForm">
              Área geográfica de abrangência de atendimento (cidades, bairros):
            </label>
            <div>
              <textarea
                className="form-control z-depth-1"
                id="areaEntidade"
                rows="2"
                maxLength="500"
                value={areaEntidade}
                onChange={e => this.setState({ areaEntidade: e.target.value })}
              />
            </div>
            <label id="labelForm">Público alvo:</label>
            <div>
              <textarea
                className="form-control z-depth-1"
                id="publicoEntidade"
                rows="1"
                maxLength="500"
                value={publicoEntidade}
                onChange={e =>
                  this.setState({ publicoEntidade: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label id="labelForm">Número de pessoas assistidas:</label>
              <input
                className="form-control"
                type="number"
                id="qtdPessoasAssistidas"
                value={qtdPessoasAssistidas}
                onChange={e =>
                  this.setState({ qtdPessoasAssistidas: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <div>
                <label id="labelForm">Número de famílias assistidas:</label>
                <input
                  className="form-control"
                  type="number"
                  id="qtdFamiliasAssistidas"
                  value={qtdFamiliasAssistidas}
                  onChange={e =>
                    this.setState({ qtdFamiliasAssistidas: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div>
                <label id="labelForm">Distribui cestas básicas?</label>
                <div className="radio">
                  <label id="labelRadio">
                    <input
                      type="radio"
                      value="Sim"
                      id="radioSim"
                      checked={this.state.cestaBasicaRB === "Sim"}
                      onChange={this.radioCesta}
                    />
                    Sim
                  </label>
                  <label id="labelRadio">
                    <input
                      type="radio"
                      id="radioNao"
                      value="Não"
                      checked={this.state.cestaBasicaRB === "Não"}
                      onChange={this.radioCesta}
                    />
                    Não
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <label id="labelForm">
                  Se sim, quantas cestas básicas são distribuídas?
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="qtdCestaBasica"
                  value={qtdCestaBasica}
                  onChange={e =>
                    this.setState({ qtdCestaBasica: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label id="labelForm">Periodicidade:</label>
                <div className="radio">
                  <label id="labelRadio">
                    <input
                      type="radio"
                      name="radioPeriodo"
                      id="radioMensal"
                      value="Mensalmente"
                      checked={this.state.frequenciaCestaRB === "Mensalmente"}
                      onChange={this.radioFrequencia}
                    />
                    Mensal
                  </label>
                  <label id="labelRadio">
                    <input
                      type="radio"
                      name="radioPeriodo"
                      id="radioSemanal"
                      value="Semanalmente"
                      checked={this.state.frequenciaCestaRB === "Semanalmente"}
                      onChange={this.radioFrequencia}
                    />
                    Semanal
                  </label>
                  <label id="labelRadio">
                    <input
                      type="radio"
                      name="radioPeriodo"
                      id="radioSemestral"
                      value="Semestralmente"
                      checked={
                        this.state.frequenciaCestaRB === "Semestralmente"
                      }
                      onChange={this.radioFrequencia}
                    />
                    Semestral
                  </label>
                  <label id="labelRadio">
                    <input
                      type="radio"
                      name="radioPeriodo"
                      id="radioEsporadicamente"
                      value="Esporadicamente"
                      checked={
                        this.state.frequenciaCestaRB === "Esporadicamente"
                      }
                      onChange={this.radioFrequencia}
                    />
                    Esporadicamente
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h5 id="h5Indica">
                  Indique abaixo duas pessoas para representar esta Entidade no
                  Conselho Deliberativo da Central da Solidariedade, que terão
                  direito a voz e a voto e a ser votado quando for necessário.
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 style={{ fontWeight: "bold" }}>Primeiro representante:</h4>
            </div>

            <div className="col-md-6">
              <label id="labelForm">Nome completo</label>
              <input
                className="form-control"
                type="text"
                id="nomePriRepresentante"
                value={nomePriRepresentante}
                onChange={e =>
                  this.setState({ nomePriRepresentante: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label id="labelForm">Telefone</label>
              <InputMask
                mask="(99)99999-9999"
                className="form-control"
                type="text"
                id="telPriRepresentante"
                value={telPriRepresentante}
                onChange={e =>
                  this.setState({ telPriRepresentante: e.target.value })
                }
              />
            </div>
            <div className="col-md-12">
              <label id="labelForm">Endereço</label>
              <input
                className="form-control"
                type="text"
                id="endPriRepresentante"
                value={endPriRepresentante}
                onChange={e =>
                  this.setState({ endPriRepresentante: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 style={{ fontWeight: "bold", marginTop: 20 }}>
                Segundo representante:
              </h4>
            </div>

            <div className="col-md-6">
              <label id="labelForm">Nome completo</label>
              <input
                className="form-control"
                type="text"
                id="nomeSegRepresentante"
                value={nomeSegRepresentante}
                onChange={e =>
                  this.setState({ nomeSegRepresentante: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label id="labelForm">Telefone</label>
              <InputMask
                mask="(99)99999-9999"
                className="form-control"
                type="text"
                id="telSegRepresentante"
                value={telSegRepresentante}
                onChange={e =>
                  this.setState({ telSegRepresentante: e.target.value })
                }
              />
            </div>
            <div className="col-md-12">
              <label id="labelForm">Endereço</label>
              <input
                className="form-control"
                type="text"
                id="endSegRepresentante"
                value={endSegRepresentante}
                onChange={e =>
                  this.setState({ endSegRepresentante: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4
                style={{
                  fontWeight: "bold",
                  marginTop: 40,
                  textAlign: "center"
                }}
              >
                Responsável pela Entidade
              </h4>
            </div>

            <div className="col-md-6">
              <label id="labelForm">Nome completo</label>
              <input
                className="form-control"
                type="text"
                id="nomeRespEntidadeFinal"
                value={nomeRespEntidade}
                onChange={e =>
                  this.setState({ nomeRespEntidade: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label id="labelForm">Telefone</label>
              <InputMask
                mask="(99)99999-9999"
                className="form-control"
                type="text"
                id="telRespEntidadeFinal"
                value={telRespEntidade}
                onChange={e =>
                  this.setState({ telRespEntidade: e.target.value })
                }
              />
            </div>
            <div className="col-md-12">
              <label id="labelForm">Endereço</label>
              <input
                className="form-control"
                type="text"
                id="endRespEntidadeFinal"
                value={endRespEntidade}
                onChange={e =>
                  this.setState({ endRespEntidade: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" id="divButton">
              <button
                className="btn btn-raised btn-secondary"
                id="botaoEnviar"
                type="submit"
                value="submit"
                onSubmit={e => this.handleFormSubmit(e)}
              >
                Enviar formulário
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormEntidade;
