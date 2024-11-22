import { Convidado } from "core";

export interface ConvidadoItemProps {
  convidado: Convidado;
}

export default function ConvidadoItem(props: ConvidadoItemProps) {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 border border-zinc-800 py-3">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.convidado.nome}</span>
        <span className="text-zinc-400 text-sm">{props.convidado.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-zinc-400 text-sm">Acompanhantes</span>
        <span className="text-xl font-bold">
          {props.convidado.qtdeAcompanhantes}
        </span>
      </div>
    </li>
  );
}
