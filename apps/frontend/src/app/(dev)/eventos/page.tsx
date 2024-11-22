import { eventos } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className=" w-full flex flex-col bg-zinc-800 rounded-lg overflow-hidden"
        >
          <div className="relative w-full h-52 ">
            <Image
              src={evento.imagem}
              alt={evento.alias}
              className="object-cover"
              fill
            ></Image>
          </div>
          <div className="flex flex-col flex-1 items-center p-7 gap-5 text-center">
            <span className="tex-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400 ">{evento.nome}</p>
            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="w-44 h-44"
            ></QRCode>
            <div className="flex gap-5">
              <Link
                className="botao vermelho flex-1"
                href={`/evento/admin/${evento.id}/${evento.senha}`}
              >
                Admin
              </Link>
              <Link
                className="botao verde flex-1"
                href={`/convite/${evento.alias}`}
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
