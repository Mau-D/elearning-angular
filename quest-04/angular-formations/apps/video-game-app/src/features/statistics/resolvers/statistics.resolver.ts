import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand, RouterStateSnapshot
} from '@angular/router';
import { StatsList } from '../models/statistic';

export const statsResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<StatsList | RedirectCommand> => {
const fakeDatas :StatsList = [{ year: 2023, nbSuccess: 100, nbFailures: 80 },
      { year: 2024, nbSuccess: 101, nbFailures: 81 },
      { year: 2025, nbSuccess: 102, nbFailures: 82 }];
      return fakeDatas;
}


// @Injectable({
//   providedIn: 'root',
// })
// export class StatisticsResolver implements Resolve<StatsList> {
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): MaybeAsync<StatsList | RedirectCommand> {
//     //TODO: 30/10/2025 replace with real data from backend (call service and http client )
//     const fakeDatas: StatsList = [
//       { year: 2023, nbSuccess: 100, nbFailures: 80 },
//       { year: 2024, nbSuccess: 101, nbFailures: 81 },
//       { year: 2025, nbSuccess: 102, nbFailures: 82 },
//     ];
//     return of(fakeDatas)
//   }
// }
