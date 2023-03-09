class Bin {
  constructor(
    warehouse,
    bin_type,
    bin_location,
    last_counted,
    abc_code,
    static_flag,
    item_code,
  ) {
    this.warehouse = warehouse;
    this.bin_type = bin_type;
    this.bin_location = bin_location;
    this.last_counted = last_counted;
    this.in_use;
    this.abc_code = abc_code;
    this.static_flag = static_flag;
    this.item_code = item_code;
  }
}

module.exports = Bin;
