-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Nome',
    "sobrenome" TEXT NOT NULL DEFAULT 'Sobrenome',
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL DEFAULT 'Telefone',
    "passwords" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT 'Image',
    "descricao" TEXT NOT NULL DEFAULT 'Texto',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("avatar", "createdAt", "descricao", "email", "id", "name", "passwords", "sobrenome", "telefone", "username") SELECT "avatar", "createdAt", "descricao", "email", "id", "name", "passwords", "sobrenome", "telefone", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
