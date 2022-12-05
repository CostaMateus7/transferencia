CREATE DATABASE bank;

\c bank

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS accounts (
  id UUID NOT NULL constraint accounts_id_pk PRIMARY KEY DEFAULT uuid_generate_v4(),
  balance numeric(20,2) DEFAULT 0000
);

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL constraint users_id_pk PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  account_id UUID,
  FOREIGN KEY(account_id) REFERENCES accounts(id)
);

CREATE TABLE IF NOT EXISTS transactions (
  id UUID NOT NULL constraint transactions_id_pk PRIMARY KEY DEFAULT uuid_generate_v4(),
  debited_account_id UUID,
  credited_account_id UUID,
  value numeric(20,2),
  created_at VARCHAR NOT NULL,
  FOREIGN KEY(debited_account_id) REFERENCES accounts(id),
  FOREIGN KEY(credited_account_id) REFERENCES accounts(id)
);
