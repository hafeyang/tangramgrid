/**
 * @author yanghengfeng
 * lazy load data for large data addon
 */
baidu.ui.Grid.extend({
	/**
	 * 延迟加载数据
	 * @param {Object} griddata 表格数据
	 * @param {Object} maxViewPointRows 视口最大呈现数据行数 默认100 可空
	 * @param {Object} startRowIndex 开始记录行 默认为0 可空
	 * @param {Object} realViewPointRows 实际视口呈现行数，优化后的视口呈现行数。默认为maxViewPointRows，可空
	 */
	lazyLoadData:function(griddata,maxViewPointRows,startRowIndex,realViewPointRows){
		var g= this,datalength= grid.data.list.length;
		//default param
		maxViewPointRows = maxViewPointRows||100;
		startRowIndex= startRowIndex||0;
		realViewPointRows= realViewPointRows||maxViewPointRows;
		//copy as originlist
		g._originlist = datalength>viewPointRows?griddata.data.list.slice():griddata.data.list;
		if(datalength>maxViewPointRows){
			griddata.data.list= griddata.data.list.slice(0,maxViewPointRows);
		}
		g.loadData(griddata);
		if (datalength > maxViewPointRows) {
			baidu.event.un(g.ref.yscroller, "scroll");
			//g.ref.ystrecher.style.height="";
		}
	}
});
