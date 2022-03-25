import { action, makeObservable, observable, runInAction } from 'mobx';
import bridge from '../services/bridge';
import { Story, User } from '../services/bridge/type/entities';
import { Nullable } from '../type';
import { TStoreState } from './type';
import { EHubPlatform } from '../typedef';
import { STORY_ID } from '../constants/mainData';

/**
 * Mobx 6 is moving away from decorators
 * Best Practices is not to move away from decorators.
 * and utilisng more makeObservable and makeAutoObservable
 *
 * https://mobx.js.org/observable-state.html#makeobservable
 * https://mobx.js.org/enabling-decorators.html
 */
class UserStore {
  loginUser: Nullable<User> = undefined;

  appName: Nullable<string> = undefined;

  appVersion: Nullable<string> = undefined;

  story: Nullable<Story> = undefined;

  state: TStoreState = {
    /**
     * NOTE:
     * Move away from boolean state like isLoading or loading or load
     * since it is limiting us to only have 2 possibilities: 'loading' and 'not loading'
     * in Real World Scenario, it's possible for a request to actually be in many different states
     */
    status: 'idle',
    error: null,
  };

  constructor() {
    makeObservable(this, {
      loginUser: observable,
      appName: observable,
      appVersion: observable,
      getLoginUser: action,
      getSystemClassName: action,
      story: observable,
      getStory: action,
    });
  }

  getLoginUser = async () => {
    this.state.status = 'loading';
    // const error: string | null = null;
    const system = await bridge.getSystemConfig();

    if (system.hasError || !system.value) {
      runInAction(() => {
        this.state.status = 'failed';
        this.state.error = JSON.stringify(system.error);
      });
      return;
    }
    runInAction(() => {
      if (system.value) {
        this.appName = system.value.appName;
      }
    });

    const user = await bridge.getEntity<User>({
      entityName: 'user',
      id: system.value.userId,
    });

    if (user.hasError) {
      runInAction(() => {
        this.state.status = 'failed';
        this.state.error = JSON.stringify(user.error);
      });
      return;
    }

    runInAction(() => {
      this.loginUser = user.value;
      this.state.status = 'succeeded';
      this.state.error = null;
    });
  };

  editProfile = () => {
    bridge.editUserProfile();
  };

  getSystemClassName = () => {
    if (this.appName === EHubPlatform.IOS) {
      return 'ios';
    }
    if (this.appName === EHubPlatform.WINDOWS) {
      return 'windows';
    }
    return 'default';
  };

  getStory = async () => {
    const result = await bridge.getEntity<Story>({
      entityName: 'story',
      id: STORY_ID,
    });
    if (result.hasError) {
      runInAction(() => {
        this.state.status = 'failed';
        this.state.error = JSON.stringify(result.error);
      });
    }
    runInAction(() => {
      this.story = result.value;
      this.state.status = 'succeeded';
      this.state.error = null;
    });
  };
}
export default UserStore;
