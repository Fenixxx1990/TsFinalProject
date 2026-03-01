import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "./stream-logger.interface";

export class StreamHendler {
  constructor(private logger: IStreamLogger) {}

  proccessOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on("data", (data: any) => {
      this.logger.log(data);
    });

    stream.stderr.on("data", (data: any) => {
      this.logger.error(data);
    });

    stream.on("close", () => {
      this.logger.end();
    });
  }
}
