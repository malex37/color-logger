# color-logger
Simple javascript colored console logger for nodejs based on npm 'colors' module

### Add to nodejs
Logger works as a simple script that exports a 'logger' function where it's imported via require.

### Structure
The script comprises a single function that receives 3 constructors:
- message
- Indicator (referred to as app within the script)
- Priority

Where:
- Message is the message that should be printed in the console.
- Indicator(App) is used for better comprehension of the log, used as reference points within your code.
- Priority, determines de level (color) of the log to be printed.
  * L0(Magenta) -> General app information
  * L1(Green) -> Subroutines 
  * L2(Cyan) -> Managed variables
  * L3(Red) -> Errors 
  * L4(Yellow) -> If used within other modules 

## Printed result

The printed result, independent of the color is printed as:
> [Indicator][date][ddd MM HH:MM:SS]=> message
