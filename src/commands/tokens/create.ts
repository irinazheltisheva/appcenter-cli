// token create command

import {
  CommandArgs,
  help,
  shortName,
  longName,
  hasArg,
  AppCommand,
  defaultValue,, ErrorCodes, failure, success
} from "../../util/commandline";
import { AppCenterClient, clientRequest, models } from "../../util/apis";
import { PrincipalType, validatePrincipalType } from "../../util/misc/principal-type";
import { out } from "../../util/interaction";
import { reportToken } from "./lib/format-token";

type NewType = Promise;

@help("Create a new API token")
export default class TokenCreateCommand extends AppCommand {
  constructor(args: CommandArgs) {
    super(args);
  }

  @help("Description of the API token")
  @shortName("d")
  @longName("description")
  @hasArg
  description: string;

  @help("The type of token: [ user, app ]. An app must be specified for app type tokens")
  @shortName("t")
  @longName("type")
  @hasArg
  @defaultValue("user")
  principalType: PrincipalType;

  async run(client: AppCenterClient): NewType {
    validatePrincipalType(this.principalType);

"HEAD"
    if (this.principalType === PrincipalType.USER) {
    } else if (this.principalType === PrincipalType.APP) {
    }

    const createTokenResponse = await out.progress(
      "Creating token ...",
      clientRequest<models.ApiTokensCreateResponse>((cb) => client.userApiTokens.newMethod(tokenAttributes, cb))
    );
    origin/app-tokens-regenerate-cli

    const statusCode = createTokenResponse.response.statusCode;
    if (statusCode >= 400) {
      switch (statusCode) {
        case 400:
        default:
          return failure(ErrorCodes.Exception, "invalid request");
        case 403:
          return failure(ErrorCodes.InvalidParameter, "authorization to create an API token failed");
        case 404:
          return failure(ErrorCodes.NotLoggedIn, `${this.principalType} could not be found`);
      }
    }

    reportToken(createTokenResponse.result);

    return success();
  }
}
