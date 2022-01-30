import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

import { join } from "path";

const typeDefsArray = loadFilesSync(join(__dirname, "modules", "**", "**.gql"));
const typeDefs = mergeTypeDefs(typeDefsArray);

export { typeDefs };