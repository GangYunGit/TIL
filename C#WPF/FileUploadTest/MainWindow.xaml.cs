using System.Text;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Win32;
using System.Xml;
using System.Xml.Serialization;
using System.Security.Cryptography;

namespace FileUploadTest
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void BtnOpenFile_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            // 아래 부분은 파일 추가할 때 옵션들로, xml파일만 보이도록 강제하는 코드
            /*openFileDialog.Filter = "XML Files(*.xml) | *.xml";
            openFileDialog.FilterIndex = 0;
            openFileDialog.DefaultExt = "xml";*/

            if (openFileDialog.ShowDialog() == true)
            {

                if (!String.Equals(System.IO.Path.GetExtension(openFileDialog.FileName), ".xml", StringComparison.OrdinalIgnoreCase))
                {                    
                    // 유효하지 않은 파일이 선택 되었을 경우 예외처리                   
                    MessageBox.Show(
                        "The type of the selected file is not supported by this application. You must select an XML file.",
                        "Invalid File Type", 
                        MessageBoxButton.OKCancel, 
                        MessageBoxImage.Error
                        );

                    // 다른 파일 선택하게 안내하기, 혹은 프로그램 종료 등등 예외처리              
                    // ...               
                }
                else 
                {
                    // 예외처리에 걸리지 않았으면 이후 작업 수행
                    textBoxViewFile.Text = File.ReadAllText(openFileDialog.FileName);
                }
            }
        }

        private void BtnOpenWindow_Click(object sender, RoutedEventArgs e)
        {
            Window newWindow = new NewWindow();
            newWindow.Top = this.Top + (this.ActualHeight - newWindow.Height) / 2;
            newWindow.Left = this.Left + (this.ActualWidth - newWindow.Width) / 2;

            newWindow.ShowDialog();
        }
    }
}