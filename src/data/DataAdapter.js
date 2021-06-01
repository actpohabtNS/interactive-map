class DataAdapter {
  constructor(data) {
    this._data = data;
  }

  facultyMap() {
    let locations = this._data.floors.map(floor => {
      const { name, id, path } = floor;
      return { name, id, path }
    });
    return {
      viewBox: this._data.viewBox,
      locations
    };
  }

  facultySVGmap() {
    return {
      map: this.facultyMap(),
      childrenBefore: this._data.svgBackground,
      childrenAfter: this._data.svgForeground
    };
  }

  floorsList() {
    return this._data.floors;
  }

  facultyInfo() {
    const { title, titleShort, id } = this._data;
    return { title, titleShort, id };
  }
}

export default DataAdapter;