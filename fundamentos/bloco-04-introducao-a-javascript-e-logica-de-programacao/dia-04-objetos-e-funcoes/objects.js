let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  get mensagem() {
    return `Bem-vinda, ${this.personagem}`;
  }
}

console.log(info.mensagem);

