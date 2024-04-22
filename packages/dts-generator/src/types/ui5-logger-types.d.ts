declare module "@ui5/logger/Logger" {
  /**
   * Standard logging module for UI5 Tooling and extensions.
   * <br><br>
   * Emits `ui5.log` events on the [`process`]{@link https://nodejs.org/api/process.html} object,
   * which can be handled by dedicated writers,
   * like [@ui5/logger/writers/Console]{@link @ui5/logger/writers/Console}.
   * <br><br>
   * If no listener is attached to an event, messages are written directly to the `process.stderr` stream.
   */
  export default class Logger {
    /**
     * Available log levels, ordered by priority:
     * <br>
     * <ol>
     *   <li>silly</li>
     *   <li>verbose</li>
     *   <li>perf</li>
     *   <li>info <i>(default)</i></li>
     *   <li>warn</li>
     *   <li>error</li>
     *   <li>silent</li>
     * </ol>
     *
     * Log level `silent` is special in the sense that no messages can be submitted with that level.
     * It can be used to suppress all logging.
     */
    static LOG_LEVELS: string[];

    /**
     * Event name used for emitting new log-message event on the
     * [`process`]{@link https://nodejs.org/api/process.html} object
     */
    static LOG_EVENT_NAME: string;

    /**
     * Sets the standard log level.
     * <br>
     * <b>Example:</b> Setting it to `perf` would suppress all `silly` and `verbose`
     * logging, and only show `perf`, `info`, `warn` and `error` logs.
     *
     * @param levelName New log level
     */
    static setLevel(levelName: string);

    /**
     * Gets the current log level
     *
     * @returns The current log level. Defaults to `info`
     */
    static getLevel(): string;

    /**
     * Tests whether the provided log level is enabled by the current log level
     *
     * @param levelName Log level to test
     * @returns True if the provided level is enabled
     */
    static isLevelEnabled(levelName: string): boolean;

    /**
     * @param moduleName Identifier for messages created by this logger.
     * Example: `module:submodule:Class`
     */
    constructor(moduleName: string);

    /**
     * Tests whether the provided log level is enabled by the current log level
     *
     * @param levelName Log level to test
     * @returns True if the provided level is enabled
     */
    isLevelEnabled(levelName: string): boolean;

    /**
     * Create a log entry with the `silly` level
     *
     * @param message Messages to log. An automatic string conversion is applied if necessary
     */
    silly(...message: any);

    /**
     * Create a log entry with the `verbose` level
     *
     * @param message Messages to log. An automatic string conversion is applied if necessary
     */
    verbose(...message: any): void;

    /**
     * Create a log entry with the `perf` level
     *
     * @param message Messages to log. An automatic string conversion is applied if necessary
     */
    perf(...message: any): void;

    /**
     * Create a log entry with the `info` level
     *
     * @param message Messages to log. An automatic string conversion is applied if necessary
     */
    info(...message: any): void;

    /**
     * Create a log entry with the `warn` level
     *
     * @param message Messages to log. An automatic string conversion is applied if necessary
     */
    warn(...message: any): void;

    /**
     * Create a log entry with the `error` level
     *
     * @param message Messages to log. An automatic string conversion is applied if necessary
     */
    error(...message: any): void;
  }
}

/**
 * Interface for the UI5 Tooling logging module
 */
declare module "@ui5/logger" {
  import Logger from "@ui5/logger/Logger";

  /**
   * Convenience function to create an instance of [@ui5/logger/Logger]{@link @ui5/logger/Logger}
   *
   * @param moduleName Identifier for messages created by the logger.
   * Example: `module:submodule:Class`
   * @returns
   */
  export function getLogger(moduleName: string): Logger;

  /**
   * Tests whether the provided log level is enabled by the current log level
   *
   * @param levelName Log level to test
   * @returns True if the provided level is enabled
   */
  export const isLogLevelEnabled: typeof Logger.isLevelEnabled;

  /**
   * Sets the standard log level.
   *
   * <b>Example:</b> Setting it to `perf` would suppress all `silly` and `verbose`
   * logging, and only show `perf`, `info`, `warn` and `error` logs.
   *
   * @param levelName New log level
   */
  export const setLogLevel: typeof Logger.setLevel;
}
