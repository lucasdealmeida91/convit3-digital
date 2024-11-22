"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Convidado, Evento, eventos } from "core";
import { use, useEffect, useState } from "react";

export default function PaginaAdminEvento(props: any) {
  const params: any = use(props.params);
  const id = params.todos[0];
  const [evento, setEvento] = useState<Evento | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);

  const presentes = evento?.convidados.filter((c) => c.confirmado) ?? [];
  const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const totalGeral =
    presentes.reduce(
      (total: number, c: Convidado) => total + c.qtdeAcompanhantes + 1,
      0
    ) ?? 0;

  function carregarEvento() {
    const evento = eventos.find((e) => e.id === id && e.senha === senha);
    setEvento(evento ?? null);
  }
  useEffect(() => {
    carregarEvento();
  }, [id]);
  return (
    <div className="flex flex-col items-center">
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral}
        />
      ) : (
        <FormSenhaEvento />
      )}
    </div>
  );
}
