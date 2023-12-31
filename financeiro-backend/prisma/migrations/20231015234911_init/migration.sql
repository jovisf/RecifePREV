-- CreateEnum
CREATE TYPE "TipoOperacao" AS ENUM ('Compra', 'Venda');

-- CreateTable
CREATE TABLE "Fundo" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,

    CONSTRAINT "Fundo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operacao" (
    "id" SERIAL NOT NULL,
    "tipo" "TipoOperacao" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "cotas" DOUBLE PRECISION NOT NULL,
    "valorCota" DOUBLE PRECISION NOT NULL,
    "fundoId" INTEGER NOT NULL,

    CONSTRAINT "Operacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fundo_cnpj_key" ON "Fundo"("cnpj");

-- AddForeignKey
ALTER TABLE "Operacao" ADD CONSTRAINT "Operacao_fundoId_fkey" FOREIGN KEY ("fundoId") REFERENCES "Fundo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Cota" (
    "id" SERIAL NOT NULL,
    "tp_fundo" TEXT NOT NULL,
    "cnpj_fundo" TEXT NOT NULL,
    "dt_comptc" TIMESTAMP(3) NOT NULL,
    "vl_quota" DOUBLE PRECISION NOT NULL,
    "nr_cotst" INTEGER NOT NULL,

    CONSTRAINT "Fundos_pkey" PRIMARY KEY ("id")
);