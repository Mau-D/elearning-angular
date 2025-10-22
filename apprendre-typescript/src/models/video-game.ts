// export class VideoGame {
//   private _label = "";
//   constructor(label: string) {
//     this._label = label;
//   }
//   get label(): string {
//     return this._label;
//   }

//   set label(value: string) {
//     this._label = value;
//   }
// }

export interface VideoGame {
  label: string;
  releaseDate: Number;
}
