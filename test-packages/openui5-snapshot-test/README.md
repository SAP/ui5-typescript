# @ui5/openui5-snapshot-test

This test-package is used in two development flows:

## Local Playground

By running the `re-generate` npm script you can inspect how changes to the `dts-generator`
would affect the output d.ts files (in `output-dts` dir).

## Snapshot Testing

On each CI build the d.ts files would be re-generated and compared
to the source controlled contents in `output-dts` dir. In isolation this has little value.
However, this forces the `output-dts` contents to be synced in any PR
which means the expected changes to the .d.ts files will also be **reviewed** in new PRs.

Note that this means that if you have changed the `dts-generator` package's output
you will need to run the `re-generate` script in this package to update the "expected d.ts results".
