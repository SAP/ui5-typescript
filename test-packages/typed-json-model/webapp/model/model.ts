import Context from "sap/ui/model/Context";
import JSONModel from "sap/ui/model/json/JSONModel";
import {
  AbsoluteBindingPath,
  PropertyByAbsoluteBindingPath,
  PropertyByRelativeBindingPath,
  RelativeBindingPath,
} from "./typing";

export class TypedJSONContext<Data extends object, Root extends AbsoluteBindingPath<Data>> extends Context {
  constructor(oModel: TypedJSONModel<Data>, sPath: Root) {
    super(oModel, sPath);
  }

  getModel(): TypedJSONModel<Data> {
    return super.getModel() as TypedJSONModel<Data>;
  }

  getProperty<P extends RelativeBindingPath<Data, Root>>(
    sPath: P extends RelativeBindingPath<Data, Root> ? P : never,
  ): PropertyByRelativeBindingPath<Data, Root, P> {
    return super.getProperty(sPath) as PropertyByRelativeBindingPath<Data, Root, P>;
  }
}

export class TypedJSONModel<Data extends object> extends JSONModel {
  constructor(oData?: Data, bObserve?: boolean) {
    super(oData, bObserve);
  }

  createBindingContext<Path extends AbsoluteBindingPath<Data>>(
    sPath: Path,
    oContext?: Context,
    mParameters?: object,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    fnCallBack?: Function,
    bReload?: boolean,
  ): TypedJSONContext<Data, Path> {
    return super.createBindingContext(sPath, oContext, mParameters, fnCallBack, bReload) as TypedJSONContext<Data, Path>;
  }

  getData(): Data {
    return super.getData() as Data;
  }

  getProperty<Path extends AbsoluteBindingPath<Data>>(sPath: Path): PropertyByAbsoluteBindingPath<Data, Path>;
  getProperty<Path extends RelativeBindingPath<Data, Root>, Root extends AbsoluteBindingPath<Data>>(
    sPath: Path,
    oContext: TypedJSONContext<Data, Root>,
  ): PropertyByRelativeBindingPath<Data, Root, Path>;
  getProperty<Path extends AbsoluteBindingPath<Data> | RelativeBindingPath<Data, Root>, Root extends AbsoluteBindingPath<Data>>(
    sPath: Path,
    oContext?: TypedJSONContext<Data, Root>,
  ): PropertyByAbsoluteBindingPath<Data, Path> | PropertyByRelativeBindingPath<Data, Root, Path> {
    return super.getProperty(sPath, oContext) as
      | PropertyByAbsoluteBindingPath<Data, Path>
      | PropertyByRelativeBindingPath<Data, Root, Path>;
  }

  setData(oData: Data, bMerge?: boolean): void {
    super.setData(oData, bMerge);
  }

  // setProperty with AbsoluteBindingPath (context === undefined),
  // PLEASE NOTE: the parameter is still necessary so
  // the bAsyncUpdate parameter can also be used with absolute paths.
  setProperty<Path extends AbsoluteBindingPath<Data>>(
    sPath: Path,
    oValue: PropertyByAbsoluteBindingPath<Data, Path>,
    oContext?: undefined,
    bAsyncUpdate?: boolean,
  ): boolean;
  setProperty<Path extends RelativeBindingPath<Data, Root>, Root extends AbsoluteBindingPath<Data>>(
    sPath: Path,
    oValue: PropertyByRelativeBindingPath<Data, Root, Path>,
    oContext: TypedJSONContext<Data, Root>,
    bAsyncUpdate?: boolean,
  ): boolean;
  setProperty<Path extends AbsoluteBindingPath<Data> | RelativeBindingPath<Data, Root>, Root extends AbsoluteBindingPath<Data>>(
    sPath: Path,
    oValue: Path extends AbsoluteBindingPath<Data>
      ? PropertyByAbsoluteBindingPath<Data, Path>
      : PropertyByRelativeBindingPath<Data, Root, Path>,
    oContext?: TypedJSONContext<Data, Root>,
    bAsyncUpdate?: boolean,
  ): boolean {
    return super.setProperty(sPath, oValue, oContext, bAsyncUpdate);
  }
}
