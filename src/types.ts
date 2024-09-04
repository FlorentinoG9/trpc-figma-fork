import type {
  TRPCClientOutgoingMessage,
  TRPCErrorResponse,
  TRPCRequest,
  TRPCResultMessage,
} from "@trpc/server/rpc";

export type TRPCFigmaRequest = {
  trpc: TRPCRequest | TRPCClientOutgoingMessage;
};

export type TRPCFigmaSuccessResponse = {
  trpc: TRPCResultMessage<unknown>;
};

export type TRPCFigmaErrorResponse = {
  trpc: TRPCErrorResponse;
};

export type TRPCFigmaResponse =
  | TRPCFigmaSuccessResponse
  | TRPCFigmaErrorResponse;
