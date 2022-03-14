import { Logger, LoggerColors, LoggerConfig} from "../src/index";

describe('Default test suite', () => {
  let logger: Logger;
  beforeAll(() => {
    console.log = jest.fn();    
  });
  it('Debug level with cyan configured', () => {
    logger = new Logger({debug: LoggerColors.Foreground.cyan});
    logger.debug('Debug message');
    expect(console.log).toHaveBeenCalledWith('\x1b[36mDebug message\x1b[0m');
  });

  it('Debug level with no color configured', () => {
    logger = new Logger();
    logger.debug('Debug message');
    expect(console.log).toHaveBeenCalledWith('\x1b[0mDebug message\x1b[0m'); 
  });
  afterAll(() => {
    // I think this should reset console.log?
    jest.resetModules();
  })
});