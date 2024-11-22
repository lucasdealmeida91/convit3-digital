import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
  const erros: string[] = [];
  if (!evento.alias) {
    erros.push("O alias do evento é obrigatório");
  }
  if (!evento.nome) {
    erros.push("O nome do evento é obrigatório");
  }
  if (!evento.senha) {
    erros.push("A senha do evento é obrigatória");
  }
  if (!evento.data) {
    erros.push("A data do evento é obrigatória");
  }
  if (!evento.local) {
    erros.push("O local do evento é obrigatório");
  }
  if (!evento.descricao) {
    erros.push("A descrição do evento é obrigatória");
  }
  if (!evento.imagem) {
    erros.push("A imagem do evento é obrigatória");
  }
  if (!evento.imagemBackground) {
    erros.push("A imagem de fundo do evento é obrigatória");
  }
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push("O publico esperado do evento é obrigatório");
  }
  return erros;
}
