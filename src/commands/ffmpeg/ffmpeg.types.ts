import { ICommandExec } from "../../core/executor/command.tyoes.dat";

export interface IFfmpegInput {
  widht: number;
  height: number;
  path: string;
  name: string;
}

export interface ICommandExecFfmpeg extends ICommandExec {
  output: string;
}
