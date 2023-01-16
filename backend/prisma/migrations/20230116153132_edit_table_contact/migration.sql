-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Nome',
    "email" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);
INSERT INTO "new_Contact" ("descricao", "email", "id") SELECT "descricao", "email", "id" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
