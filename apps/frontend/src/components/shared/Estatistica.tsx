/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export interface EstatisticaProps {
  texto: string;
  valor: any;
  imagem: string;
}
export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
      <div className="flex flex-1 flex-col">
        <span className="font-light text-zinc-400">{props.texto}</span>
        <span className="font-black text-2xl">{props.valor}</span>
      </div>
      <Image src={props.imagem} alt="ícone" width={80} height={80}></Image>
    </div>
  );
}
