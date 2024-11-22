import { Evento } from "core";
import Informacao from "../shared/Informacao";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}
export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props;
  return (
    <div className={`flex flex-col gap-2 ${props.className}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="font-black text-2xl">{evento.alias}:</span>
        <span className="text-xl text-zinc-300">{evento.nome}</span>
      </div>
      <div className="flex gasp-2 ">
        <Informacao label="Data:">
          <span>
            {new Date(evento.data!).toLocaleDateString("pt-BR")}
            {" às "}
            {new Date(evento.data!).toLocaleTimeString("pt-BR")}
          </span>
        </Informacao>
        <Informacao label="Local:">{evento.local}</Informacao>
      </div>

      <Informacao label="Descrição:">{evento.descricao}</Informacao>
    </div>
  );
}
