import { log, loggingWorked } from "../extension";
import * as vs from 'vscode';
import * as assert from "assert";

suite("Extension Tests", function () {
    test("Log works", async function () {
        await vs.extensions.getExtension("DanTup.logtest").activate();
        await vs.commands.executeCommand("test.logToConsole");
        log("This line was sent to the log() function");
        assert(loggingWorked);
    });
});
