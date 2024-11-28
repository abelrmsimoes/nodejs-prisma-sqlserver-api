import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connect() {
  await prisma.$connect();
}

connect();

export function getClientes() {
  return prisma.clientes.findMany();
}

export function getCliente(id: number) {
  return prisma.clientes.findUnique({
    where: { ID: id }
  })
}

export function addCliente(newCustomer: any) {
  return prisma.clientes.create({
    data: newCustomer
  })
}

export function updateCliente(id: number, newData: any) {
  return prisma.clientes.update({
    where: { ID: id },
    data: newData
  })
}

export function deleteCliente(id: number) {
  return prisma.clientes.delete({
    where: { ID: id }
  })
}