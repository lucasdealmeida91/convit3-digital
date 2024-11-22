export default class Senha {
  static nova(tamanho: number = 8): string {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const caracteresEspeciais = "!@#$%&*";

    const grupos = [minusculas, maiusculas, numeros, caracteresEspeciais];
    const senha = [];

    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      senha.push(grupo.charAt(Math.floor(Math.random() * grupo.length)));
    }

    return senha.join("");
  }
}

console.log(Senha.nova());
