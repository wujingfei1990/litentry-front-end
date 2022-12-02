// import { action, observable, toJS } from 'mobx';
// import services from '../services';

// class HomeStore {
//   @observable loading = false;
//   @observable dashboardList = {};
//   @observable couponList = [];
//   @observable type = 1;

//   @action async getList() {
//     this.loading = true;
//     const dashboardServices = services.statisticsServer.getDashboard();
//     const couponServices = services.statisticsServer.getStatisticCoupon({ type: this.type });
//     const [dashboardList, couponList] = await Promise.all([dashboardServices, couponServices]);

//     if (dashboardList.code == 10000 && couponList.code == 10000) {
//       this.loading = false;
//       this.dashboardList = dashboardList?.data || {};
//       this.couponList = couponList?.data || [];
//     }
//   }

//   @action async getCouponList(type) {
//     this.type = type;
//     const res = await services.statisticsServer.getStatisticCoupon({ type });
//     if (res.code == 10000) {
//       this.couponList = res?.data || [];
//     }
//   }
// }

// export default HomeStore;
