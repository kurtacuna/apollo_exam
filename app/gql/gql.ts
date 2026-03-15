/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    fragment LaunchCardFragment on Launch {\n        id,\n        mission_name,\n        launch_date_local,\n        launch_year,\n        launch_site {\n            site_name,\n            site_name_long\n        },\n        rocket {\n            rocket_name,\n            rocket {\n                id\n            }\n        },\n        details\n    }\n": typeof types.LaunchCardFragmentFragmentDoc,
    "\n    fragment RocketFragment on Rocket {\n        name,\n        description,\n        first_flight,\n        height {\n            feet,\n            meters\n        },\n        diameter {\n            feet,\n            meters\n        },\n        mass {\n            kg,\n            lb\n        },\n        stages\n    }    \n": typeof types.RocketFragmentFragmentDoc,
    "\n\t\tquery Launches {\n\t\t\tlaunches {\n\t\t\t\t...LaunchCardFragment\n\t\t\t}\n\t\t}\n\t": typeof types.LaunchesDocument,
    "\n        query Rocket($id: ID!) {\n            rocket(id: $id) {\n                ...RocketFragment\n            }\n        }\n    ": typeof types.RocketDocument,
};
const documents: Documents = {
    "\n    fragment LaunchCardFragment on Launch {\n        id,\n        mission_name,\n        launch_date_local,\n        launch_year,\n        launch_site {\n            site_name,\n            site_name_long\n        },\n        rocket {\n            rocket_name,\n            rocket {\n                id\n            }\n        },\n        details\n    }\n": types.LaunchCardFragmentFragmentDoc,
    "\n    fragment RocketFragment on Rocket {\n        name,\n        description,\n        first_flight,\n        height {\n            feet,\n            meters\n        },\n        diameter {\n            feet,\n            meters\n        },\n        mass {\n            kg,\n            lb\n        },\n        stages\n    }    \n": types.RocketFragmentFragmentDoc,
    "\n\t\tquery Launches {\n\t\t\tlaunches {\n\t\t\t\t...LaunchCardFragment\n\t\t\t}\n\t\t}\n\t": types.LaunchesDocument,
    "\n        query Rocket($id: ID!) {\n            rocket(id: $id) {\n                ...RocketFragment\n            }\n        }\n    ": types.RocketDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment LaunchCardFragment on Launch {\n        id,\n        mission_name,\n        launch_date_local,\n        launch_year,\n        launch_site {\n            site_name,\n            site_name_long\n        },\n        rocket {\n            rocket_name,\n            rocket {\n                id\n            }\n        },\n        details\n    }\n"): (typeof documents)["\n    fragment LaunchCardFragment on Launch {\n        id,\n        mission_name,\n        launch_date_local,\n        launch_year,\n        launch_site {\n            site_name,\n            site_name_long\n        },\n        rocket {\n            rocket_name,\n            rocket {\n                id\n            }\n        },\n        details\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment RocketFragment on Rocket {\n        name,\n        description,\n        first_flight,\n        height {\n            feet,\n            meters\n        },\n        diameter {\n            feet,\n            meters\n        },\n        mass {\n            kg,\n            lb\n        },\n        stages\n    }    \n"): (typeof documents)["\n    fragment RocketFragment on Rocket {\n        name,\n        description,\n        first_flight,\n        height {\n            feet,\n            meters\n        },\n        diameter {\n            feet,\n            meters\n        },\n        mass {\n            kg,\n            lb\n        },\n        stages\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Launches {\n\t\t\tlaunches {\n\t\t\t\t...LaunchCardFragment\n\t\t\t}\n\t\t}\n\t"): (typeof documents)["\n\t\tquery Launches {\n\t\t\tlaunches {\n\t\t\t\t...LaunchCardFragment\n\t\t\t}\n\t\t}\n\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query Rocket($id: ID!) {\n            rocket(id: $id) {\n                ...RocketFragment\n            }\n        }\n    "): (typeof documents)["\n        query Rocket($id: ID!) {\n            rocket(id: $id) {\n                ...RocketFragment\n            }\n        }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;