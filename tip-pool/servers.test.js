describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add another new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    serverNameInput.value = 'Bob';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(2);
    // checks the last server added
    expect(allServers['server' + serverId].serverName).toEqual('Bob');
  });

  it('should not add another new server if input is empty', function () {
    submitServerInfo();
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    // checks the last server added
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update ServerTable when new server is created', function () {
    submitServerInfo();
    serverNameInput.value = 'Bob';
    submitServerInfo();
    updateServerTable();

    let currentServerTable = document.querySelector('#serverTable tbody').childElementCount;
    console.log(currentServerTable);

    expect(currentServerTable).toEqual(2);
    expect(document.querySelector('#server2').firstChild.innerText).toEqual('Bob');
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
