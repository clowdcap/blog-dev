/*
  Warnings:

  - Added the required column `autor` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "capa" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Post" ("capa", "conteudo", "createdAt", "descricao", "id", "titulo") SELECT "capa", "conteudo", "createdAt", "descricao", "id", "titulo" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_titulo_key" ON "Post"("titulo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
