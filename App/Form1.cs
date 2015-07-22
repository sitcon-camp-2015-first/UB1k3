using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace App
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.label2.Text="";
            SpWebClient n = new SpWebClient();

            Regex nn = new Regex(@"arealist='(.*?)';arealist=JSON.parse");
            string SourceStr = (nn.Match(n.DownloadString("http://taipei.youbike.com.tw/cht/f12.php")).Groups[1].Value);
            SourceStr = System.Net.WebUtility.UrlDecode(SourceStr);
            JObject Json = (JObject)Newtonsoft.Json.JsonConvert.DeserializeObject(SourceStr);
            SourceStr = Json.ToString().Replace("\r\n", "").Replace(" ", "");
            Regex jj = new Regex("\"sna\":\"(.*?)\",\"sarea\":\"[^\"]+\",\"ar\":\"[^\"]+\",\"tot\":\"([^\"]+)\",\"sbi\":\"([^\"]+)\",\"bemp\":\"([^\"]+)\",\"lat\":\"([^\"]+)\",\"lng\":\"([^\"]+)\"");


            string MyCurrLocSource = n.DownloadString("http://maps.googleapis.com/maps/api/geocode/json?address=" + textBox1.Text, Encoding.UTF8);
            MyCurrLocSource = MyCurrLocSource.Replace("\n", "").Replace(" ", "");
            Regex gg = new Regex("{\"lat\":([^,]+),\"lng\":([^}]+)}");

            double Lat = double.Parse(gg.Match(MyCurrLocSource).Groups[1].Value);
            double Lng = double.Parse(gg.Match(MyCurrLocSource).Groups[2].Value);
            this.label2.Text += "當前經度:" + Lat.ToString() + "\n";
            this.label2.Text += "當前緯度:" + Lng.ToString() + "\n";
            double shortestlen = 100000000;
            
            string shortestName = "";
            int CurTotal = 0,CurCanUseCount =0,CurUsedCount = 0;
            foreach (Match cur in jj.Matches(SourceStr))
            {
                double temp_Lat = double.Parse(cur.Groups[5].Value);
                double temp_Lng = double.Parse(cur.Groups[6].Value);
                double temp_short_len = Math.Abs(temp_Lat - Lat) * Math.Abs(temp_Lat - Lat) +
                                        Math.Abs(temp_Lng - Lng) * Math.Abs(temp_Lng - Lng);
                if (shortestlen > temp_short_len)
                {
                    shortestlen = temp_short_len;
                    shortestName = cur.Groups[1].Value;
                    CurTotal = int.Parse(cur.Groups[2].Value);
                    CurCanUseCount = int.Parse(cur.Groups[3].Value);
                    CurUsedCount = int.Parse(cur.Groups[4].Value);
                }
            }
            this.label2.Text += ("最近的UBike站為: " + shortestName + "站. \n共有:" + CurTotal.ToString() + " ,可出借數量:" + CurCanUseCount.ToString() + " ,已出借數量:" + CurUsedCount.ToString());
            
        }
    }
}
