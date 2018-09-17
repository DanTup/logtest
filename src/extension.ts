import * as vs from 'vscode';

export function activate(context: vs.ExtensionContext) {
    context.subscriptions.push(new TestLoggingCommands());
}

export function deactivate() {
}

const onLogEmitter2: vs.EventEmitter<string> = new vs.EventEmitter<string>();
export const onLog2: vs.Event<string> = onLogEmitter2.event;
export function log2(message: string) {
    onLogEmitter2.fire(message);
}


export class TestLoggingCommands implements vs.Disposable {
    private disposables: vs.Disposable[] = [];

    constructor() {
        this.disposables.push(
            vs.commands.registerCommand("test.logToConsole", this.startLogging2, this),
        );
    }

    private async startLogging2(): Promise<void> {
        this.disposables.push(onLog2((s) => console.log(s)));
    }

    public dispose(): any {
        for (const command of this.disposables)
            command.dispose();
    }
}
